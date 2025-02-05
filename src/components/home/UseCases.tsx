import Image from 'next/image';
import React from 'react';
import { Button } from '@surebank/components/ui/button';

const UseCases = () => {
  return (
    <section className="py-5">
      <div className="flex flex-col gap-5 text-center lg:text-start">
        {/* Title */}
        <div className="h2 neon">Use Cases</div>

        {/* Description  */}
        <p className="text-[#B3B3B3] font-light">
          At SureBank, we cater to the diverse needs of individuals and businesses alike, offering a
          wide range of financial solutions
        </p>

        {/* For individuals  */}
        <div className="flex flex-col lg:flex-row w-full items-center gap-16 my-10">
          <div className="relative w-full lg:w-1/2 bg-[#1C1C1C] rounded-2xl p-5 lg:p-10">
            <Image
              src={'/icons/radial-dots-bg.svg'}
              width={200}
              height={200}
              alt="radial-dots-bg"
              className="absolute z-10 top-0 left-0"
            />

            <div className="grid grid-cols-2 gap-4">
              {/* first box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-1-1.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Managing Personal Finance</p>
                </div>
              </div>
              {/* second box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-1-2.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Saving for the Future</p>
                </div>
              </div>
              {/* third box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-1-3.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Homeownership</p>
                </div>
              </div>
              {/* fourth box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-1-4.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Education Funding</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">
            <h3 className="h4">For Individuals</h3>
            <p className="text-[#B3B3B3] font-light max-w-96 lg:max-w-full">
              For individuals, our mortgage services pave the way to homeownership, and our flexible
              personal loans provide vital support during various life milestones. We also
              prioritize retirement planning, ensuring a financially secure future for our customers
            </p>

            <div className="flex-center flex-col justify-center lg:flex-row gap-10 lg:gap-5 py-8">
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">78%</h3>
                <p className="text-[#B3B3B3] font-light">Secure Retirement Planning</p>
              </div>
              <div className="lg:h-full h-px lg:w-px self-stretch bg-[#262626]"></div>
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">63%</h3>
                <p className="text-[#B3B3B3] font-light">Manageable Debt Consolidation</p>
              </div>
              <div className="lg:h-full h-px lg:w-px self-stretch bg-[#262626]"></div>
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">91%</h3>
                <p className="text-[#B3B3B3] font-light">Reducing financial burdens</p>
              </div>
            </div>

            <Button className="btn-secondary w-fit border border-[#262626] rounded-full text-center p-5">
              Learn More
            </Button>
          </div>
        </div>

        {/* For businesses  */}
        <div className="flex flex-col lg:flex-row-reverse w-full items-center gap-16 my-10">
          <div className="relative w-full lg:w-1/2 bg-[#1C1C1C] rounded-2xl p-5 lg:p-10">
            <Image
              src={'/icons/radial-dots-bg.svg'}
              width={200}
              height={200}
              alt="radial-dots-bg"
              className="absolute z-10 top-0 left-0"
            />

            <div className="grid grid-cols-2 gap-4">
              {/* first box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-2-1.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Startups and Entrepreneurs</p>
                </div>
              </div>
              {/* second box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/products/icon-1-3.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Cash Flow Management</p>
                </div>
              </div>
              {/* third box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-2-3.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Business Expansion</p>
                </div>
              </div>
              {/* fourth box  */}
              <div className="flex-center flex-col gap-4 bg-[#1A1A1A] border border-[#262626] p-4 rounded-xl text-center z-20">
                <div className="flex-none">
                  <Image
                    src={'/icons/usecases/icon-2-4.svg'}
                    width={72}
                    height={72}
                    alt="checking-accounts"
                  />
                </div>
                <div className="flex-grow">
                  <p>Payment Solutions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start">
            <h3 className="h4">For Businesses</h3>
            <p className="text-[#B3B3B3] font-light max-w-96 lg:max-w-full">
              For businesses, we empower growth with working capital solutions that optimize cash
              flow, and our tailored financing options fuel business expansion. Whatever your
              financial aspirations, SureBank is committed to providing the right tools and support
              to achieve them
            </p>

            <div className="flex-center flex-col justify-center lg:flex-row gap-10 lg:gap-5 py-8">
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">65%</h3>
                <p className="text-[#B3B3B3] font-light">Cash Flow Management</p>
              </div>
              <div className="lg:h-full h-px lg:w-px self-stretch bg-[#262626]"></div>
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">70%</h3>
                <p className="text-[#B3B3B3] font-light">Drive Business Expansion</p>
              </div>
              <div className="lg:h-full h-px lg:w-px self-stretch bg-[#262626]"></div>
              <div className="flex flex-col gap-5 lg:w-1/3 w-full max-w-96">
                <h3 className="h2 neon">45%</h3>
                <p className="text-[#B3B3B3] font-light">Streamline Payroll Processing</p>
              </div>
            </div>

            <Button className="btn-secondary w-fit border border-[#262626] rounded-full text-center p-5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
