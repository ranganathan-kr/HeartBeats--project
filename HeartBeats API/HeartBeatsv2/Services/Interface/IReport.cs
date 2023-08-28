using HeartBeatsv2.Models;
using System.Collections.Generic;

namespace HeartBeatsv2.Services.Interface
{
    public interface IReport
    {
        public Task<Report> AddReport(Report report);
        public Task<Report> RemoveReport(int id);
        public Task<List<Report>> GetReport();
        public Task<Report> GetReportById(int id);
    }
}
