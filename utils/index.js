import Link from "next/link";

export const menuItems = [
  { name: "Home", link: "/" },
  {
    name: "Latest Sarkari Jobs",
    link: "/latest-jobs",
    subMenu: [
      { name: "All Government Jobs", link: "/latest-vacancy?type=jobs" },
      { name: "State Wise Jobs", link: "/state-wise-jobs" },
      { name: "Department Wise Jobs", link: "/department-wise-jobs" },
      {
        name: "Jobs Admit Card & Exam",
        link: "/latest-vacancy?type=admitCards",
      },
      { name: "Sarkari Answer Key", link: "/latest-vacancy?type=answerKeys" },
      { name: "Sarkari Result", link: "/latest-vacancy?type=results" },
    ],
  },
  {
    name: "Govt. Education Admission",
    link: "/education-admission",
    subMenu: [
      {
        name: "All Govt. School Admission",
        link: "/all-govt-school-admission",
      },
      {
        name: "All Govt. College Admission",
        link: "/all-govt-collage-admission",
      },
      { name: "State wise School", link: "/state-wise-school" },
      { name: "Course wise Colleges", link: "/course-wise-colleges" },
      { name: "Admission Admit Card & Exam", link: "/admit-card-exam" },
      { name: "Education Result & Answer Key", link: "/result-answer-key" },
    ],
  },
  { name: "GK & Current Affairs", link: "/gk-current-affairs" },
  {
    name: "Study Material",
    link: "/study-material",
    subMenu: [
      { name: "Video Classes", link: "/video-classes" },
      { name: "Books", link: "/books" },
      { name: "Notes", link: "/notes" },
      { name: "Old Papers", link: "/old-papers" },
    ],
  },
  {
    name: "Mock Test",
    link: "/mock-test",
    subMenu: [
      { name: "Short Hand", link: "/short-hand" },
      { name: "Typing Test", link: "/typing-test" },
      { name: "Online Test", link: "/online-test" },
    ],
  },
  { name: "Blog", link: "/blog" },
  { name: "Web Stories", link: "/web-stories" },
];
export const contentData = [
  {
    title: "Welcome to India Sarkari Naukri.Com",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading-7">
        Today sarkari naukri is the best option for job seekers because this
        year according to a famous news website "Tech companies laid off their
        employees by more than 40% in 2023", On the other hand, sarkari naukri
        is a secure job. Ind SarkariNaukri.com is No. 1 of the best Job sites
        for Sarkari Job, Sarkari Naukri, Banks, Railways, female job, Police
        Recruitment, Sarkari Results of IBPS, UPSC, SSC, RRB, RPBS Fresher IT
        Jobs and more. India Sarkari Naukri.com is the No. 1 Sarkari Naukri
        portal in 2024-25 for people seeking Sarkari Naukri 2024 in India. 5000+
        jobs are open; check eligibility. We're here to give you employment
        news, help you find suitable jobs for yourself, and also provide the
        process of applying.
      </p>
    ),
  },
  {
    title: "Exploring Sarkari Naukari Exam Made Simple",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          In India, government jobs provide stability, good benefits, and a
          sense of purpose. We know how important these opportunities are in
          your career journey. That's why India Sarkari Naukri is here to help
          you at every step.
        </p>
        <h5 className="text-xs mt-4 mb-1 text-darkbule font-semibold  sm:text-sm md:text-base lg:text-base">
          Why Pick Government Jobs?
        </h5>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Government jobs are special for job seekers in India. They offer
          security and a chance to help the country grow. From important civil
          services jobs to specialized roles in different areas, sarkari
          naukri match a wide range of skills and interests.
        </p>
        <h5 className="text-xs mt-4 mb-1 text-darkbule font-semibold  sm:text-sm md:text-base lg:text-base ">
          Getting You the Right Information?
        </h5>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          We know that finding accurate info about government job openings can
          be tough. That's where we come in. Our platform is carefully designed
          to give you the latest notifications, job details, application steps,
          and important updates about government jobs.
        </p>
      </>
    ),
  },
  {
    title: " Sarkari Naukari Exam is Your Path to Success",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Our goal is simple – we want to help you get your dream government job
          in India. Here's how India Sarkari Naukri supports you:
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            1. Job Listings :{" "}
          </span>
          Our goal is simple – we want to help you get your dream government job
          in India. Here's how India Sarkari Naukri supports you:
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            2. Quick Updates :{" "}
          </span>
          Stay ahead of others with real-time updates about job openings. Our
          fast notifications make sure you don’t miss any chances.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            3. Detailed Job Info :{" "}
          </span>
          We provide more than just basic job listings. Our detailed info covers
          what you need to know, like who can apply, when to apply, and how the
          selection process works.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            4. Step-by-Step Help :{" "}
          </span>
          Applying for government jobs can be complex. Our guides break down the
          process into smaller steps, so you can apply confidently.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            5. Community Support :{" "}
          </span>
          Explore many government job options in different fields and regions.
          Our easy-to-use website helps you find jobs that match what you're
          looking for.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            6. Books :{" "}
          </span>
          India Sarkari Naukri also provides free books for exam preparation to
          all Sarkari Naukri seekers. We provide the best books to help with
          your studies.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            7. GK and GS :{" "}
          </span>
          India Sarkari Naukri provides you with daily current affairs on our
          website, Telegram channels, and WhatsApp group. We have a team that
          researches general knowledge and general science and updates on our
          website.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            8. Sarkari Naukri WhatsApp Group :{" "}
          </span>
          Join our{" "}
          <a className="text-linkcolor underline" href="#">
            Sarkari Naukri WhatsApp Group Link
          </a>{" "}
          to get the latest Sarkari Naukri notifications.
        </p>

        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            9. Telegram Channel :{" "}
          </span>
          We also have a{" "}
          <a className="text-linkcolor underline" href="#">
            Telegram channel
          </a>{" "}
          for students where we update the latest notifications and also post
          current affairs, GK & GS.
        </p>
      </>
    ),
  },
  {
    title: "Start Your Journey with India Sarkari Naukri",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        Getting a government job is a big deal, and
        <a className="text-linkcolor underline" href="#">
          India Sarkari Naukri.Com
        </a>
        is here to help you succeed. Whether you just finished school, have
        experience, or want to switch to a government job, our platform is here
        for you.
      </p>
    ),
  },
  {
    title: "Why Choose Sarkari Naukri?Stability, Security, and a Good Career",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        In a changing job market, government jobs in India (called Sarkari
        Naukri) are more attractive than ever. In a world where private sector
        jobs can be uncertain, going for a Sarkari Naukri can give you
        stability, security, and a chance to achieve your career goals.
      </p>
    ),
  },
  {
    title: "The Job Situation Today",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        As reported by the Times of India, in 2023, around 1,600 tech employees
        are losing their jobs every day on average worldwide This shows how
        private sector jobs can be uncertain and how employees in different
        industries can face challenges.
      </p>
    ),
  },
  {
    title: " Why should I consider a government job?",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        In India, lots of students seeking Sarkari Naukri. India sarkari
        naukri.com provides the latest sarkari naukri notification for those
        students who are preparing sarkari exam. Government jobs are the
        ultimate career goal, providing long-term security, good benefits, and
        friendly colleagues. More than that, a job in the Indian government
        offers an opportunity to live a meaningful life. This is one way for you
        to give back to your community. According to the Centre for Monitoring
        Indian Economy Pvt. Ltd. (CMIE), the unemployment rate in India has
        increased from 6.5% in November 2020 to 7.75% in October 2021. In this
        volatile market, the need for stability and longevity brought about by
        Sarkari Naukri is increasing day by day. Additionally, government jobs
        in India can be very lucrative and offer competitive salaries, benefits,
        and pensions. Some of the highest-paying jobs in the Indian government
        include the Indian Administrative Service (IAS), Indian Foreign Service
        (IFS), and Indian Police Service (IPS). Remember that these jobs are
        also very competitive and require a complicated application process.
      </p>
    ),
  },
  {
    title: "Why Sarkari Naukri Is pleasurable?",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Sarkari Naukri or govt jobs are best for securing the future. Sarkari
          Naukri is a valuable job in Indian society, here you have lots of
          facilities and also you can enhance your career.
        </p>
        {/* list 1 */}
        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            1. Stability and Security :{" "}
          </span>
          Sarkari Naukri offers protection against job uncertainty. Unlike
          private jobs, where layoffs happen, government jobs are known for
          stability. You're safe in your position, and your work helps the
          country move forward, ensuring a secure future for you and your
          family.
        </p>
        {/* list 2 */}
        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            2. Good Benefits :{" "}
          </span>
          Government jobs come with many benefits, like health coverage, pension
          plans, and extra payments that make your life better. These perks help
          you feel secure, so you can focus on your career and well-being.
        </p>
        {/* list 3 */}
        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            3. Balance Between Work and Life :{" "}
          </span>
          Sarkari Naukri often lets you balance work and life well. You can do
          well at your job while spending time with your family. This reduces
          stress and lets you enjoy life outside of work.
        </p>
        {/* list 4 */}
        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            4. Growing Your Career :{" "}
          </span>
          Government jobs have a clear way to move up in your career. You can
          improve your skills, get promoted, and learn new things. This helps
          you always grow and achieve your goals.
        </p>
        {/* list 5 */}
        <p className="text-xs mt-3 mb-1 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          <span className="text-xs text-darkbule font-semibold sm:text-sm md:text-base lg:text-base">
            5. Feeling Satisfied and Making a Difference :{" "}
          </span>
          Working in the government can be very fulfilling. Government roles
          often mean helping the community, making positive changes, and
          impacting society. Your work matters and makes you proud.
        </p>
      </>
    ),
  },
  {
    title: "Start Your Fulfilling Journey with Sarkari Naukari Exam",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          In a world where job security is rare and careers can be uncertain,
          Sarkari Naukri is a reliable and promising option. By choosing
          government jobs, you're not just getting a job – you're securing a
          future with stability, benefits, and a chance to make a difference.
        </p>
        <p className="text-xs mt-3 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Start your journey towards a great career. Check out the many
          <a className="text-linkcolor underline" href="#">
            latest govt vacancy
          </a>
          options available and make a choice that sets the foundation for your
          success and happiness.
        </p>
        <p className="text-xs mt-3 leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Visit
          <a className="text-linkcolor underline" href="#">
            www.Indiasarkarinaukri.com
          </a>
           to learn more about Sarkari Naukri and start a journey towards a
          brighter, secure, and prosperous future.
        </p>
      </>
    ),
  },
];

export const allJobContentData = [
  {
    title: "Welcome to India Sarkari Naukri.Com",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7 lg:leading-7">
          India 
          <Link className="text-linkcolor underline" href="#">
            Sarkari Naukri.Com 
          </Link>
          is a Sarkari job portal for the latest govt Vacancy updates in India!
          We are your trusted source for information on a wide range of job
          vacancies, including ITI Apprentice, Graduate Apprentice,
          Stenographer, Railway Jobs, and Bank Job Vacancies. Whether you're a
          fresh graduate, an experienced professional, or someone looking to
          make a career change, we've got you covered with the most up-to-date
          and comprehensive job listings. Read on to explore the exciting
          opportunities that await you in the government sector.
        </p>
        <p className=" mt-3 text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7 lg:leading-7">
          In today's competitive job market, securing a stable government job is
          a dream for many in India. Government jobs offer job security,
          attractive pay scales, and various benefits. In this comprehensive
          guide, we will explore the latest Naukari Exam vacancies, including
          the 
          <Link className="text-linkcolor underline" href="#">
             Delhi Subordinate Services Selection Board (DSSSB)
          </Link>{" "}
          Vacancy, Staff Selection Commission (SSC) Delhi Police Constable
          Vacancy, Union Public Service Commission (UPSC) recruitment, and
          opportunities in the Indian Army, Navy, and Airforce. Stay tuned for
          detailed information on these prestigious job openings.
        </p>
      </>
    ),
  },
  {
    title: "Delhi Subordinate Services Selection Board (DSSSB) Vacancy",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          DSSSB plays a pivotal role in recruiting highly qualified individuals
          for various government departments in the National Capital Territory
          of Delhi. Job seekers can find opportunities in fields such as
          teaching, healthcare, administrative services, and more. The DSSSB
          conducts regular examinations and announces vacancies through its
          official website, making it crucial to keep an eye on their updates.
        </p>
        <h5 className="text-xs mt-4 mb-1 text-black font-semibold  sm:text-sm md:text-base lg:text-base">
          Know more:{" "}
          <a className="text-linkcolor underline font-medium" href="#">
            DSSSB Vacancy 2023
          </a>
        </h5>
      </>
    ),
  },
  {
    title: "Staff Selection Commission (SSC) Delhi Police Constable Vacancy",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        The SSC Delhi Police Constable recruitment is a sought-after opportunity
        for those aspiring to serve in the law enforcement sector. This
        recruitment drive offers positions in the Delhi Police Force, providing
        candidates with a chance to contribute to the safety and security of the
        national capital. The SSC conducts a rigorous selection process,
        including written exams, physical endurance tests, and interviews,
        ensuring that only the best candidates are selected.
      </p>
    ),
  },
  {
    title: "Union Public Service Commission (UPSC) Recruitment",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        UPSC is India's premier central recruiting agency, responsible for
        appointing candidates to various prestigious civil services and
        government positions. UPSC conducts a range of examinations, including
        the Civil Services Examination (CSE), Indian Engineering Services (IES),
        Indian Forest Services (IFS), and more. These examinations attract lakhs
        of aspirants each year due to the exceptional career opportunities they
        offer in the Indian Administrative Service (IAS), Indian Police Service
        (IPS), and other elite government services.
      </p>
    ),
  },
  {
    title: "Indian Army Jobs",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        Serving in the Indian Army is a lifelong commitment to safeguarding the
        nation's borders and maintaining internal security. The Army offers a
        wide array of career opportunities for both officers and soldiers,
        including technical, medical, and administrative roles. Aspiring
        candidates can join through various entry modes, such as the National
        Defence Academy (NDA), the Combined Defence Services (CDS) examination,
        and the Short Service Commission (SSC) for technical and non-technical
        roles.
      </p>
    ),
  },
  {
    title: "Indian Navy Jobs",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        The Indian Navy is a vital component of the nation's defense,
        responsible for securing maritime borders and maintaining peace and
        stability in the Indian Ocean region. Job seekers can explore diverse
        career paths within the Navy, including executive, technical, and
        education branches. The Indian Navy regularly releases recruitment
        notifications for sailors, officers, and other technical and
        non-technical positions.
      </p>
    ),
  },
  {
    title: "Indian Air force Jobs",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        Joining the Indian Air Force allows individuals to soar to new heights,
        both literally and figuratively. The Air Force offers opportunities in
        flying, technical, and ground duty branches. Candidates can apply
        through various entry schemes like the Air Force Common Admission Test
        (AFCAT), National Defence Academy (NDA), and Combined Defence Services
        (CDS) examination. The Air Force ensures that recruits are equipped with
        cutting-edge technology and training to protect Indian airspace and
        project national power.
      </p>
    ),
  },
  {
    title: "ITI Apprentice Jobs and Graduate Apprentice Jobs",
    content: (
      <>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          At India Sarkari Naukri, we understand the importance of skill
          development and on-the-job training. That's why we provide timely
          updates on 
          <Link className="text-linkcolor underline" href="#">
            ITI Apprentice
          </Link>
           and Graduate Apprentice job openings across various industries. These
          apprenticeships offer valuable hands-on experience and are an
          excellent way to kickstart your career. Stay tuned for notifications
          from renowned organizations and government departments offering
          apprenticeship programs that can set you on a path to success.
        </p>
        <h5 className="text-xs mt-4 mb-1 text-darkbule font-semibold  sm:text-sm md:text-base lg:text-base">
          Stenographer Jobs:
        </h5>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          Are you skilled in shorthand and looking for a challenging career as a
          stenographer in the government sector? India Sarkari Naukri brings you
          the latest stenographer job vacancies from various government
          departments and ministries. Stenographers play a crucial role in
          maintaining official records and facilitating smooth communication.
          Explore our listings to find stenographer job opportunities that match
          your qualifications and aspirations.
        </p>
        <h5 className="text-xs mt-4 mb-1 text-darkbule font-semibold  sm:text-sm md:text-base lg:text-base ">
          Railway Jobs:
        </h5>
        <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
          The Indian Railways is one of the largest employers in the country,
          offering diverse career options. At India Sarkari Naukri, we keep you
          updated on the latest railway job vacancies, including opportunities
          in RRB (Railway Recruitment Board), Junior Engineer (JE), Loco Pilot,
          Ticket Collector (TCE), Technician, Post Guard, Fireman, Group D
          Staff, and Group C positions. Whether you're interested in technical
          roles, operational positions, or administrative jobs, we have
          comprehensive listings to help you navigate the railway job landscape.
        </p>
      </>
    ),
  },
  {
    title: "Bank Job Vacancies",
    content: (
      <p className="text-xs leading-relaxed sm:text-sm md:text-sm md:leading-6 lg:text-base lg:leading:7">
        For those seeking a secure and rewarding career in the banking sector,
        India Sarkari Naukri provides detailed information on bank job
        vacancies. We cover a wide spectrum of bank jobs, including Probationary
        Officer (PO), Clerk, Accountant, and more. As banks are the backbone of
        the financial sector, they offer excellent opportunities for growth and
        stability. Keep yourself updated with our listings to find your ideal
        banking job and embark on a journey toward financial success
      </p>
    ),
  },
];

export const homeFaqs = [
  {
    question: "What is Sarkari Result?",
    answer:
      "Sarkari Naukri is a Hindi term that translates to Government Job in English. It refers to employment opportunities provided by the government. These jobs can be in various sectors such as education, healthcare, administration, defense, and more. People often seek sarkari naukri due to the perceived job security, benefits, and the sense of serving the public.",
  },
  {
    question: "What are central government exams?",
    answer:
      "Central government exams serve as standardized tests administered by the national government to assess the abilities and knowledge of individuals seeking employment in various sectors. These examinations span diverse fields, including banking, defense, civil services, railways, and more. Successfully clearing these exams opens doors to job opportunities within national government departments and agencies, offering individuals not only job security but also attractive benefits and prospects for professional advancement. These exams play a crucial role in ensuring a fair and merit-based selection process for positions within the central government.",
  },
  {
    question: "How do you become a central government employee?",
    answer:
      "To become a central government employee in India, start by getting the necessary education for the job you're interested in. Look for the right government exam, like UPSC Civil Services or SSC CGL, and prepare well by understanding the syllabus and practicing past papers. Apply online when the exam notifications are released, and once you qualify, go through any additional stages like interviews or skill tests. Complete the document verification process, and if required, undergo training. Finally, when you receive the joining letter, it's time to start your job as a central government employee. Stay updated on official announcements and maintain a strong work ethic throughout the process for the best chance of success.",
  },
  {
    question: "Which degree is best for central government jobs?",
    answer:
      "The best degree for central government jobs depends on the specific field. For civil services, a bachelor's degree in any discipline is sufficient. Engineering degrees are necessary for engineering services, while degrees in commerce, economics, or business administration are common for banking and finance jobs. Defense services may require different qualifications and technical and scientific positions often require degrees related to the field. Always check the specific eligibility criteria for the job you're interested in.",
  },
  {
    question: "Which is the most powerful post in central government?",
    answer:
      "Before 1946, the Indian Imperial Service was in existence, and civil services have long been a defining feature of Indian governance. In the present context, the Cabinet Secretary holds the highest rank among Indian Administrative Service (IAS) officials and is the most influential senior civil servant in the Indian government.",
  },
  {
    question: "Which central govt job has the highest salary?",
    answer:
      " As of my last knowledge update in January 2022, the salary structure for central government jobs in India varies across positions and services. Among the highest-paying positions are generally those at the top levels of the bureaucracy, such as the Secretary to the Government of India or other high-ranking officials. Additionally, certain specialized roles in sectors like finance, defense, and scientific research may offer competitive salaries. The pay scale can also depend on factors such as experience, qualifications, and the specific department or ministry. It's important to note that salary structures and pay scales may be revised, and new positions or changes in policy can impact the ranking of the highest-paying central government jobs. For the most current and accurate information, it is advisable to check the latest official notifications and guidelines from the concerned government departments.",
  },
  {
    question: "Who is eligible for the central government exam?",
    answer:
      " Eligibility for central government exams in India depends on factors like educational qualifications, age limits, nationality, and additional requirements specific to each exam. Candidates should refer to official notifications for detailed and accurate information regarding eligibility criteria.",
  },
];

export const latestJobFaqs = [
  {
    question: "How to find a Sarkari job?",
    answer:
      "After searching sarkariprep.in in Google, you can get sarkari job updates by clicking on the government job section on the home page.",
  },
  {
    question: "What is the salary for a Sarkari job?",
    answer:
      "The candidates who are selected for the Sarkari Naukri Result are paid according to the seventh pay scale by the government.",
  },
  {
    question: "How to apply for a Sarkari job?",
    answer: "You can apply online / offline for Sarkari Naukri.",
  },
  {
    question: "What is the age limit for Sarkari jobs?",
    answer: "The prescribed age limit for Sarkari jobs is 18 to 35 years.",
  },
];
export const allJobFaqs = [
  {
    question: " How to Secure a Government Job Without an Intexrview?",
    answer:
      "Many government job opportunities do not involve interviews as part of their selection process. For instance, examinations conducted by the Staff Selection Commission (SSC), including SSC CGL, SSC CHSL, and SSC MTS, do not include an interview stage. Applicants are typically required to complete objective tests, and in some cases, a descriptive test or a skill test (such as a typing test) for selection. Examinations like the IBPS Clerk and SBI Clerk Exams also follow a similar pattern, omitting the interview stage. Additionally, technical positions like those in the Railway Recruitment Board - Junior Engineer (RRB JE) and Railway Recruitment Board - Senior Section Engineer (RRB SSE) categories generally do not involve interviews either.",
  },
  {
    question: " Which Government Jobs Offer the Best Salaries?",
    answer:
      "Some of the highest-paying government jobs in India encompass roles such as Indian Forest Service (IFoS) officers, ISRO scientists, RBI Grade B officers, and medical officers, among others.",
  },
  {
    question: " Is TCS a Government Job?",
    answer:
      "It is important to note that Tata Consultancy Services (TCS) is not a government job. TCS is a multinational information technology services and consulting company headquartered in Mumbai, India.",
  },
  {
    question: "How can you get a government job without an interview?",
    answer:
      "There are many government job positions where no interview is required. For example, in exams conducted by the Staff Selection Commission (SSC), such as SSC CGL, SSC CHSL, or SSC MTS, the interview stage is not included. Applicants typically need to complete an objective test, and in some cases, a descriptive exam or skill test (such as typing test) may also be required. Similarly, the IBPS Clerk and SBI Clerk exams are also exams where there is no interview stage. Additionally, technical positions like Railway Recruitment Board - Junior Engineer (RRB JE) and Railway Recruitment Board - Senior Section Engineer (RRB SSE) generally do not have an interview stage.",
  },
  {
    question: "Which Examinations Do Not Include Interviews?",
    answer:
      "Several examinations do not incorporate interviews into their selection processes. For instance, exams conducted by the Staff Selection Commission (SSC), such as SSC CGL, SSC CHSL, and SSC MTS, do not include an interview stage. Similarly, both IBPS Clerk and SBI Clerk Exams follow this pattern by omitting the interview stage.",
  },
  {
    question: "Which Positions Do Not Require Interviews?",
    answer:
      "Numerous positions within the government sector typically do not require interviews. For example, roles like Indian Army soldiers generally do not necessitate written tests or interviews, but candidates usually undergo a physical examination as part of the selection process.",
  },
];

//export const apiurl = "https://newindiansarkari-production.up.railway.app";
export const apiurl = "https://backend.indiasarkarinaukri.com";
//export const apiurl = "https://www.indiasarkarinaukri.com/wp-json/wp/v2/posts";
//export const oldApiUrl = "https://backend.indiasarkarinaukri.com";

export const deleteData = async (endpoint) => {
  try {
    const response = await fetch(`${apiurl}${endpoint}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete: ${response.statusText}`);
    }

    // Check if response has content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    return null; // Return null if no JSON content
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiurl}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// export const getData = async (endpoint) => {
//   try {
//     const response = await fetch(`${apiurl}${endpoint} || ${oldApiUrl}${endpoint}`);
//     if (!response.ok) {
//       // throw new Error(`Failed to fetch: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     //throw error;
//   }
// };
export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${apiurl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    //throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${apiurl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to submit: ${response.status} ${response.statusText}, Details: ${errorText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

const categories = [
  { name: "Govt. jobs", image: "images/Govt-Jobs.webp", path: "/govt-jobs" },
  {
    name: "Railway jobs",
    image: "images/Railway_Jobs.webp",
    path: "/railway-jobs",
  },
  { name: "Bank jobs", image: "images/Bank_Jobs.webp", path: "/bank-jobs" },
  {
    name: "Defence jobs",
    image: "images/Defence_Jobs.webp",
    path: "/defence-jobs",
  },
  {
    name: "Postal jobs",
    image: "images/Postal_Jobs.webp",
    path: "/postal-jobs",
  },
  {
    name: "Judicial jobs",
    image: "images/Judicial_Jobs.webp",
    path: "/judicial-jobs",
  },
  {
    name: "Teaching jobs",
    image: "images/Teaching_Faculty.webp",
    path: "/teaching-jobs",
  },
  {
    name: "Engineering",
    image: "images/Engineering_Jobs.webp",
    path: "/engineering-jobs",
  },
  {
    name: "Clerical jobs",
    image: "images/Clerical_Jobs.webp",
    path: "/clerical-jobs",
  },
  {
    name: "Medical Jobs",
    image: "images/Medical_Biotech.webp",
    path: "/medical-jobs",
  },
];
