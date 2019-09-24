﻿using Cototal.AspNetCore.ApprovedEmailAccess.Middleware;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Workout3.Web.Config;
using Workout3.Web.Services;

namespace Workout3.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var googleAuthConfig = BindConfig<GoogleAuthConfig>("GoogleAuth");
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = "Cookies";
                options.DefaultChallengeScheme = "Google";
            })
                .AddCookie("Cookies")
                .AddGoogle("Google", options =>
                {
                    options.ClientId = googleAuthConfig.ClientId;
                    options.ClientSecret = googleAuthConfig.ClientSecret;
                });
            services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedFor |
                    Microsoft.AspNetCore.HttpOverrides.ForwardedHeaders.XForwardedProto;
                options.KnownNetworks.Clear();
                options.KnownProxies.Clear();
            });
            services.AddSingleton<IVerifyAdminEmailOptions>(srv => new VerifyAdminEmailOptions(Configuration.GetValue<string>("AdminEmails")));
            services.AddSingleton<WorkoutService>(srv => new WorkoutService(Configuration.GetConnectionString("DefaultConnection")));
            services.AddSingleton<AssetVersionFinder>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            if (env.IsProduction())
            {
                app.UseForwardedHeaders();
            }

            app.UseAuthentication();
            app.UseMiddleware<VerifyAdminEmail>();
            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }

        private T BindConfig<T>(string sectionName)
            where T : new()
        {
            var config = new T();
            Configuration.GetSection(sectionName).Bind(config);
            return config;
        }
    }
}
