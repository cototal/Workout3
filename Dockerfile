FROM node:lts AS assets
WORKDIR /src
COPY ./Workout3.Assets .
RUN npm install
RUN npm run build

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY Workout3.Web/ .
RUN dotnet restore "Workout3.Web.csproj"
RUN dotnet build "Workout3.Web.csproj" -c Release -o /app
RUN dotnet publish "Workout3.Web.csproj" -c Release -o /app

FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim
ENV TZ=America/Chicago
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
WORKDIR /app
EXPOSE 80
COPY --from=build /app .
COPY --from=assets /src/dist ./wwwroot/assets
ENTRYPOINT ["dotnet", "Workout3.Web.dll"]
