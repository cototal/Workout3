﻿using Microsoft.AspNetCore.Mvc;
using Workout3.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Workout3.Web.Models;
using Newtonsoft.Json;

namespace Workout3.Web.Controllers
{
    public class WorkoutController : BaseController
    {
        private readonly WorkoutService _workoutService;

        public WorkoutController(WorkoutService workoutService)
        {
            _workoutService = workoutService;
        }


        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var workouts = await _workoutService.Recent();
            return View(workouts);
        }


        [HttpGet]
        public async Task<IActionResult> Create([FromQuery]string location)
        {
            var workout = new Workout { Location = location };
            return View(workout);
        }


        [HttpPost]
        public async Task<IActionResult> Create(Workout workout)
        {
            if (ModelState.IsValid)
            {
                await _workoutService.Create(workout);
                return RedirectToAction("Index");
            }
            return View(workout);
        }
    }
}
