'use client'
import CountUp from 'react-countup'

export default function Static1() {
	return (
		<>
			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">

							{/* Years of Experience */}
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">
											+<CountUp enableScrollSpy={true} end={3} className="odometer ds-1 text-dark fw-semibold" />
										</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Years of</p>
											<p className="fs-5 mb-0 fw-bold">Experience</p>
										</div>
									</div>
								</div>
							</div>

							{/* Projects Completed */}
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">
											+<CountUp enableScrollSpy={true} end={20} className="odometer ds-1 text-dark fw-semibold" />
										</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Projects</p>
											<p className="fs-5 mb-0 fw-bold">Shipped</p>
										</div>
									</div>
								</div>
							</div>

							{/* Tech Stack Used */}
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">
											+<CountUp enableScrollSpy={true} end={10} className="odometer ds-1 text-dark fw-semibold" />
										</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Tech</p>
											<p className="fs-5 mb-0 fw-bold">Stacks Mastered</p>
										</div>
									</div>
								</div>
							</div>

							{/* Systems Built */}
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">
											+<CountUp enableScrollSpy={true} end={5} className="odometer ds-1 text-dark fw-semibold" />
										</span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Enterprise</p>
											<p className="fs-5 mb-0 fw-bold">Systems Built</p>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}
