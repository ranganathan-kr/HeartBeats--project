using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace HeartBeatsv2.Services
{
    public class ReportService : IReport
    {
        private HeartBeatsv2Context _heartBeatsContext;

        public ReportService(HeartBeatsv2Context heartBeatsContext)
        {
            _heartBeatsContext = heartBeatsContext;
        }

        public async Task<Report> AddReport(Report report)
        {
            _heartBeatsContext.Reports.Add(report);
            await _heartBeatsContext.SaveChangesAsync();
            return report;
        }

        public async Task<List<Report>> GetReport()
        {
            var rep= await _heartBeatsContext.Reports.ToListAsync();
            if(rep ==null)
            {
                throw new Exception("There was no report");
            }
            else
            {
                return rep;

            }

        }

        public async Task<Report> GetReportById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Report> RemoveReport(int id)
        {
            throw new NotImplementedException();
        }
    }
}
