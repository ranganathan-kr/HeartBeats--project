using HeartBeatsv2.Models;
using HeartBeatsv2.Services.Interface;
using Microsoft.EntityFrameworkCore;

namespace HeartBeats.Services
{
    public class RequestService : IRequest
    {
        private HeartBeatsv2Context _heartBeatsContext;

        public RequestService(HeartBeatsv2Context heartBeatsContext)
        {
            _heartBeatsContext = heartBeatsContext;
        }

        public async Task<Request> AddRequest(Request request)
        {
            await _heartBeatsContext.Requests.AddAsync(request);
            await _heartBeatsContext.SaveChangesAsync();
            return request;
           
           
        }

        public async Task<List<Request>> GetRequest()
        {
            return await _heartBeatsContext.Requests.ToListAsync();
        }

        public async Task<Request> DeleteRequestById(int id)
        {
            var req = await _heartBeatsContext.Requests.FindAsync(id);
            if (req == null)
            {
                throw new Exception("not found");
            }
            else
            {
                _heartBeatsContext.Remove(req);
                await _heartBeatsContext.SaveChangesAsync();
                return req;
            }
        }
    }
}
