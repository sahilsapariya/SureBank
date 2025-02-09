import { JOB_DESCRIPTION, JOB_LIST } from '@surebank/constants/Careers';
import Image from 'next/image';
import React from 'react';

const Job = () => {
  return (
    <section className="my-12">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2 neon">Job Openings</div>

        {/* Description */}
        <p className="text-[#B3B3B3] font-light max-w-5xl">{JOB_DESCRIPTION}</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5">
        {JOB_LIST.map((job) => {
          return (
            <div
              className="border border-[#262626] bg-[#1C1C1C] rounded-xl p-5 flex flex-col tex-start gap-2"
              key={job._id}
            >
              {/* role  */}
              <h4 className="h4">{job.title}</h4>

              {/* tags  */}
              <ul className="flex gap-2 flex-wrap">
                <li className="py-2 px-4 border border-[#262626] bg-[#1A1A1A] rounded-full font-light text-[#B3B3B3] ">
                  <span>Location:</span> {job.location}
                </li>
                <li className="py-2 px-4 border border-[#262626] bg-[#1A1A1A] rounded-full font-light text-[#B3B3B3] ">
                  <span>Department:</span> {job.department}
                </li>
              </ul>

              {/* Description */}
              <div className="flex flex-col gap-3 my-5">
                <h5 className="h5">About This Job</h5>
                <p className="text-[#B3B3B3] font-light">{job.description}</p>
              </div>

              <div className="flex flex-col gap-3 mb-5">
                <h5 className="h5 py-2">Requirements & Qualification</h5>
                {/* Requirements */}
                {job.requirements.map((requirement, index) => {
                  return (
                    <div className="flex gap-2 items-center" key={index}>
                      <Image src="/icons/careers/job.svg" width={20} height={20} alt="job" />
                      <p className="text-[#B3B3B3] font-light">{requirement}</p>
                    </div>
                  );
                })}
              </div>

              {/* Apply Button */}
              <button className="btn-primary w-fit">Apply Now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Job;
