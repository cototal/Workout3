using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workout3.Web.Models
{
    public class Exercise
    {
        public int? Position { get; set; }
        public string Name { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public IList<Batch> Batches { get; set; } = new List<Batch>();
    }
}
