import Link from "next/link"

export default function Resume1() {
	return (
		<>
			<section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="assets/imgs/projects/projects-1/background.png">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Resume</h3>
							<span className="fs-5 fw-medium text-200">
								Over 3 years of hands-on backend development experience with a proven track record <br />
								in building scalable systems for e-commerce, education, and business platforms.
							</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								Get in touch
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>

					<div className="row mt-6">
						{/* Education */}
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="assets/imgs/resume/resume-1/icon-1.svg" alt="education" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Education</h3>
								</div>
								<div className="resume-card-body">
									<div className="resume-card-item px-4 py-3 mt-5">
										<div className="d-flex align-items-end">
											<div>
												<p className="fw-extra-bold text-linear-1 mb-2">2019 - 2023</p>
												<h5>Bachelor of Computer Science</h5>
												<p className="text-300 mb-0">Faculty of Computer Science and AI, Helwan University</p>
											</div>
											<h3 className="text-linear-1 ms-auto fw-semibold">Very Good</h3>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Experience */}
						<div className="col-lg-6 col-12">
							<div className="resume-card p-lg-6 p-4 h-100">
								<div className="resume-card-header d-flex align-items-end">
									<img className="border-linear-1 border-3 pb-2 pe-2" src="assets/imgs/resume/resume-1/icon-2.svg" alt="experience" />
									<h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experience</h3>
								</div>
								<div className="resume-card-body">

									{/* Mid-level Web Developer – Aladdin-EG */}
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Jul 2023 – Present</p>
										<h5>Mid-Level Backend Developer</h5>
										<p className="text-300 mb-0">Aladdin-EG</p>
									</div>

									{/* Freelance Developer */}
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Nov 2022 – Present</p>
										<h5>Freelance Web Developer</h5>
										<p className="text-300 mb-0">Built and delivered 20+ custom systems for clients</p>
									</div>

									{/* Junior Dev at CordDigital */}
									<div className="resume-card-item px-4 py-3 mt-5">
										<p className="fw-extra-bold text-linear-1 mb-2">Mar 2023 – Nov 2023</p>
										<h5>Junior Web Developer</h5>
										<p className="text-300 mb-0">CordDigital</p>
									</div>

									{/* Magdsoft */}
									<div className="resume-card-item px-4 py-3 mt-4">
										<p className="fw-extra-bold text-linear-1 mb-2">Oct 2022 – Mar 2023</p>
										<h5>Junior Backend Developer</h5>
										<p className="text-300 mb-0">Magdsoft - Software House</p>
									</div>

								</div>
							</div>
						</div>
					</div>

				</div>

				<div className="scroll-move-right position-relative pb-160 pt-lg-150">
					<div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
						<h3 className="stroke fs-150 text-uppercase text-white">Laravel . APIs . CMS . ERP</h3>
					</div>
				</div>
			</section>
		</>
	)
}
