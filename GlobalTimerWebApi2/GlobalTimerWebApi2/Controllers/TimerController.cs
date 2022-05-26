using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GlobalTimerWebApi2.Controllers
{
    public class TimerController : ApiController
    {
        //code for timer
        [HttpGet]
        [Route("api/start")]
        public void StartTimer()
        {
            WebApiApplication.StartTimer();
        }

        //code for timer
        [HttpGet]
        [Route("api/stop")]
        public void StopTimer()
        {
            WebApiApplication.EndTimer();
        }
    }
}
