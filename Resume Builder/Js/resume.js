// Retrieve the data from localStorage
const resumeData = JSON.parse(localStorage.getItem('resumeData'));

// Check if data exists
if (resumeData) {
    // Populate the resume fields
    document.getElementById('resumeName').textContent = resumeData.fullName;
    document.getElementById('resumeContact').textContent = `Email: ${resumeData.email}, Mobile: ${resumeData.mobile}`;
    document.getElementById('resumeAddress').textContent = `Address: ${resumeData.address}`;

    document.getElementById('resumeDob').textContent = `Date of Birth: ${resumeData.dob}`;
    document.getElementById('resumeGender').textContent = `Gender: ${resumeData.gender}`;
    document.getElementById('resumeReligion').textContent = `Religion: ${resumeData.religion}`;
    document.getElementById('resumeNationality').textContent = `Nationality: ${resumeData.nationality}`;
    document.getElementById('resumeMaritalStatus').textContent = `Marital Status: ${resumeData.maritalStatus}`;

    document.getElementById('resumeHobbies').textContent = `Hobbies: ${resumeData.hobbies}`;
    document.getElementById('resumeLanguages').textContent = `Languages Known: ${resumeData.languages}`;

    // Populate Experience
    const experienceSection = document.getElementById('experienceSection');
    resumeData.experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.classList.add('p-2', 'border', 'rounded', 'mb-2');
        expElement.innerHTML = `
            <h6>${exp.title}</h6>
            <p class="small text-secondary m-0"><i class="bi bi-buildings"></i> ${exp.company} (${exp.duration})</p>
            <p class="small text-secondary m-0">${exp.description}</p>
        `;
        experienceSection.appendChild(expElement);
    });

    // Populate Education
    const educationSection = document.getElementById('educationSection');
    resumeData.education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.classList.add('p-2', 'border', 'rounded', 'mb-2');
        eduElement.innerHTML = `
            <h6>${edu.degree}</h6>
            <p class="small text-secondary m-0"><i class="bi bi-book"></i> ${edu.institute}</p>
            <p class="small text-secondary m-0">Completed in ${edu.completionDate}</p>
        `;
        educationSection.appendChild(eduElement);
    });

    // Populate Skills
    const skillsSection = document.getElementById('skillsSection');
    resumeData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('p-2', 'border', 'rounded', 'mb-2');
        skillElement.innerHTML = `<h6><i class="bi bi-caret-right"></i> ${skill.skillName}</h6>`;
        skillsSection.appendChild(skillElement);
    });
}
