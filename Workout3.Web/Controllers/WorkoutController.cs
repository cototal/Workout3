using Microsoft.AspNetCore.Mvc;
using Workout3.Web.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            var workouts = await _workoutService.Find();
            return View(workouts);
        }
    }
}
