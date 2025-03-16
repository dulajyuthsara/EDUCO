// Calendar - Navigation with Events
document.addEventListener('DOMContentLoaded', function() {
    const prevMonthBtn = document.getElementById('prevMonth'); // Button for previous month
    const nextMonthBtn = document.getElementById('nextMonth'); // Button for next month
    const currentMonthEl = document.getElementById('currentMonth'); // Display current month
    const calendarEventsContainer = document.querySelector('.calendar-events'); // Container to display events
    
    // Define month data with event details (day, title, description)
    const monthData = [
        // Data for months from January to June 2025
        {
            name: 'January 2025',
            events: [
                {
                    day: 15,
                    title: 'Digital Literacy Workshop',
                    description: 'Teaching computer skills to underprivileged youth at the community center.'
                },
                {
                    day: 28,
                    title: 'Environmental Awareness Day',
                    description: 'Educational sessions on sustainable practices and recycling initiatives.'
                }
            ]
        },
        {
            name: 'February 2025',
            events: [
                {
                    day: 12,
                    title: 'Tutoring & Mentorship',
                    description: 'Providing mentorship and tutoring to underprivileged students to enhance learning opportunities.'
                },
                {
                    day: 28,
                    title: 'Educational Workshops',
                    description: 'Conducting sessions on digital literacy, coding, and design to empower students with tech skills.'
                }
            ]
        },
        {
            name: 'March 2025',
            events: [
                {
                    day: 8,
                    title: 'Women in STEM Day',
                    description: 'Organizing workshops to encourage young women to pursue careers in science and technology.'
                },
                {
                    day: 22,
                    title: 'Community Garden Project',
                    description: 'Planting trees and vegetables at local schools to promote sustainability education.'
                }
            ]
        },
        {
            name: 'April 2025',
            events: [
                {
                    day: 5,
                    title: 'Financial Literacy Program',
                    description: 'Teaching budgeting and saving strategies to high school students.'
                },
                {
                    day: 22,
                    title: 'Earth Day Celebration',
                    description: 'Hosting interactive activities on environmental conservation and climate action.'
                }
            ]
        },
        {
            name: 'May 2025',
            events: [
                {
                    day: 10,
                    title: 'Career Guidance Workshop',
                    description: 'Providing career advice and resume building skills to graduating students.'
                },
                {
                    day: 25,
                    title: 'Inclusive Design Hackathon',
                    description: 'Creating accessible digital solutions for people with disabilities.'
                }
            ]
        },
        {
            name: 'June 2025',
            events: [
                {
                    day: 8,
                    title: 'Summer Reading Program',
                    description: 'Launching a literacy initiative for elementary school children during summer break.'
                },
                {
                    day: 20,
                    title: 'Coding Camp for Kids',
                    description: 'Teaching basic programming concepts through fun, interactive games and activities.'
                }
            ]
        }
    ];
    
    let currentMonthIndex = 1; // Default month (February)
    
    // Function to display events for the current month
    function displayEvents(monthIndex) {
        // Clear previous events
        calendarEventsContainer.innerHTML = '';
        
        // Get current month's events
        const events = monthData[monthIndex].events;
        
        // Create event elements
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'calendar-event';
            
            eventElement.innerHTML = `
                <div class="event-date">
                    <span class="event-day">${event.day}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            `;
            
            calendarEventsContainer.appendChild(eventElement);
        });
    }
    
    // Contact Me - Function to update calendar
    function updateCalendar() {
        currentMonthEl.textContent = monthData[currentMonthIndex].name;
        displayEvents(currentMonthIndex);
    }
    
    // Event listeners for calendar navigation
    prevMonthBtn.addEventListener('click', function() {
        if (currentMonthIndex > 0) {
            currentMonthIndex--;
            updateCalendar();
        }
    });
    
    nextMonthBtn.addEventListener('click', function() {
        if (currentMonthIndex < monthData.length - 1) {
            currentMonthIndex++;
            updateCalendar();
        }
    });
    
    // Initialize calendar with current month's events
    updateCalendar();

    
    // Contact Me Form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            
            if (!fullName || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone.replace(/[^0-9]/g, ''))) {
                alert('Please enter a valid phone number (10 digits only).');
                return;
            }
                        
            // If validation passes
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
});