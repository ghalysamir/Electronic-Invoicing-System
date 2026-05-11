import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements AfterViewInit {

  sales = 11000;
  newOrders = 43;
  totalCustomers = 15;

  ngAfterViewInit(): void {
    this.createChart();
    this.createInvoiceChart();
    this.createCustomerChart();
  }

  createChart() {
    const ctx = document.getElementById('revenueChart') as any;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue ($)',
            data: [5000, 7000, 8000, 9000, 11000, 13000],
            borderColor: '#1890ff',
            backgroundColor: 'rgba(24,144,255,0.2)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  createInvoiceChart() {
    const ctx = document.getElementById('invoiceChart') as any;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Invoices',
            data: [10, 20, 30, 25, 40, 50],
            backgroundColor: '#52c41a'
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  createCustomerChart() {
    const ctx = document.getElementById('customerChart') as any;

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Customers',
            data: [5, 10, 15, 12, 18, 25],
            borderColor: '#faad14',
            backgroundColor: 'rgba(250,173,20,0.2)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

}