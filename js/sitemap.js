document.addEventListener('DOMContentLoaded', function() {
    // Get all node links
    const nodeLinks = document.querySelectorAll('.node-link');

    // Add keyboard navigation for accessibility
    nodeLinks.forEach((nodeLink) => {
        nodeLink.setAttribute('tabindex', '0'); // Ensure focusable
        nodeLink.setAttribute("role", "link"); // Screen reader friendly

        // Handle keyboard navigation
        nodeLink.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.getAttribute("href");
                if (link) {
                    window.location.href = link;
                }
            }
        });

    });

});
