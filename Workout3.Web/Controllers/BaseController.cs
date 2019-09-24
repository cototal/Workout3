﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workout3.Web.Controllers
{
    [Authorize]
    abstract public class BaseController : Controller
    {}
}
