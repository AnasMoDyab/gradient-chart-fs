using System;

namespace api.Models
{
    public class Company
    {
        public long Id { get; set; }
        public string? companyNames { get; set; }
        public string names { get; set; }
        public string agent { get; set; }
        public string gender { get; set; }
        public DateTime meetingDate { get; set; }
    }
}