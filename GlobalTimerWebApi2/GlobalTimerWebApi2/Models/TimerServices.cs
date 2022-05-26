using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace GlobalTimerWebApi2.Models
{
    //code for timer
    public static class TimerServices
    {
        //code for timer
        public static void DoSomethingWithtimer(string path)
        {
            File.AppendAllText(path+"fileFromGATimer.txt","hey there time:" + DateTime.Now.ToString() +  "\r\n");
        }
    }
}