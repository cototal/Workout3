using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Workout3.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Workout3.Web.Services
{
    public class WorkoutService
    {
        private readonly IMongoCollection<Workout> _workouts;

        public WorkoutService(string connectionString)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("workoutdb");
            _workouts = database.GetCollection<Workout>("workouts");
        }

        public async Task<List<Workout>> Find()
        {
            var workouts = await _workouts.Find(n => true).ToListAsync();
            return workouts;
        }


        public async Task<Workout> FindOne(string id)
        {
            var workout = await _workouts.Find(n => n.Id == id).FirstOrDefaultAsync();
            return workout;
        }

        public async Task<Workout> Create(Workout workout)
        {
            await _workouts.InsertOneAsync(workout);
            return workout;
        }

        public async Task<Workout> Update(Workout updatedWorkout)
        {
            await _workouts.ReplaceOneAsync(n => n.Id == updatedWorkout.Id, updatedWorkout);
            return updatedWorkout;
        }

        public async Task Remove(string id)
        {
            await _workouts.DeleteOneAsync(n => n.Id == id);
        }
    }
}
