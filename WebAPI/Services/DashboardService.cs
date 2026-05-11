using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
namespace WebAPI.Services
{
    public class DashboardService
    {
        private readonly InvoicikaDbContext _context;

        public DashboardService(InvoicikaDbContext context)
        {
            _context = context;
        }

        public async Task<DashboardDto> GetDashboardData()
        {
            var totalIncome = await _context.CustomerInvoices.SumAsync(i => i.TotalAmount);
            var totalInvoices = await _context.CustomerInvoices.CountAsync();
            var totalCustomers = await _context.Customers.CountAsync();

            return new DashboardDto
            {
                TotalIncome = totalIncome,
                TotalInvoices = totalInvoices,
                TotalCustomers = totalCustomers
            };
        }
    }
}
