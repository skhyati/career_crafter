import React from 'react'
import LatestJobCards from './LatestJobCards'

function LatestJobs() {
    const jobData = [
        {
            companyName: 'Google',
            location: 'Bangalore, India',
            jobTitle: 'Frontend Engineer',
            jobDescription: 'Develop and optimize front-end applications using the latest web technologies...',
            positions: 10,
            jobType: 'Full Time',
            salary: '30 LPA'
        },
        {
            companyName: 'Amazon',
            location: 'Hyderabad, India',
            jobTitle: 'Backend Engineer',
            jobDescription: 'Design and implement scalable backend systems using AWS technologies...',
            positions: 7,
            jobType: 'Full Time',
            salary: '28 LPA'
        },
        {
            companyName: 'Microsoft',
            location: 'Noida, India',
            jobTitle: 'DevOps Engineer',
            jobDescription: 'Manage and automate cloud infrastructure, ensuring continuous integration and delivery...',
            positions: 5,
            jobType: 'Part Time',
            salary: '22 LPA'
        },
        {
            companyName: 'Infosys',
            location: 'Pune, India',
            jobTitle: 'Data Scientist',
            jobDescription: 'Analyze large datasets to provide actionable insights using AI and ML technologies...',
            positions: 8,
            jobType: 'Full Time',
            salary: '25 LPA'
        },
        {
            companyName: 'TCS',
            location: 'Mumbai, India',
            jobTitle: 'Full Stack Developer',
            jobDescription: 'Develop and maintain full-stack applications with an emphasis on security and performance...',
            positions: 12,
            jobType: 'Contract',
            salary: '20 LPA'
        },
        {
            companyName: 'Adobe',
            location: 'Bangalore, India',
            jobTitle: 'UX/UI Designer',
            jobDescription: 'Create user-centric designs and collaborate with developers to implement design specifications...',
            positions: 4,
            jobType: 'Full Time',
            salary: '26 LPA'
        }
    ]
    

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
            {
                jobData.map((job, index) => (
                    <LatestJobCards
                        key={index}
                        companyName={job.companyName}
                        location={job.location}
                        jobTitle={job.jobTitle}
                        jobDescription={job.jobDescription}
                        positions={job.positions}
                        jobType={job.jobType}
                        salary={job.salary}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default LatestJobs
