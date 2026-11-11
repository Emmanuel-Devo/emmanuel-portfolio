# Genuine Project Screenshots Directory

To display your actual project screenshots on the website cards:

1. Save your screenshot image file in this folder:
   Example:
   /public/projects/three-tier-eks.png
   /public/projects/two-tier-flask.png
   /public/projects/kubernetes-platform.png
   /public/projects/linux-lab.png
   /public/projects/container-assessment.png
   /public/projects/month-one-assessment.png

2. Open `/src/data/portfolioData.ts` and set the `screenshotUrl` for the corresponding project:
   Example:
   screenshotUrl: '/projects/three-tier-eks.png'

3. The project card will automatically detect and display the screenshot in full responsive resolution!
