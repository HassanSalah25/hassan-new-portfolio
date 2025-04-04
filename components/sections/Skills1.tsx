'use client'
import Link from "next/link"
import CountUp from 'react-countup'

export default function Skills1() {
	return (
		<>
			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								From crafting scalable APIs to deploying secure, production-ready systems,<br className="d-md-block d-none" />
								I focus on clean architecture, performance, and maintainability.
							</span>
						</div>

						{/* Skill Grid */}
						<div className="d-flex flex-wrap justify-content-center gap-3 mb-7 px-6">

							{/* Laravel */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={95} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Laravel</p>
								</div>
							</div>

							{/* PHP */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://pngimg.com/uploads/php/php_PNG50.png" alt="PHP" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={92} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">PHP</p>
								</div>
							</div>

							{/* WordPress */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="WordPress" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={90} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">WordPress</p>
								</div>
							</div>

							{/* MySQL */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt="MySQL" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={88} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">MySQL</p>
								</div>
							</div>

							{/* REST APIs */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://icon-library.com/images/rest-api-icon/rest-api-icon-7.jpg" alt="API" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={94} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">REST APIs</p>
								</div>
							</div>

							{/* Git & Version Control */}
							<div className="skills">
								<div className="skills-icon mb-5">
									<img width={90} src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="Git" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0">
										<CountUp enableScrollSpy={true} end={89} />%
									</h3>
									<p className="text-400 fw-medium text-uppercase">Git / GitHub</p>
								</div>
							</div>

						</div>

						{/* Secondary Skills */}
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">Other tools I work with:</p>
							<div className="d-flex justify-content-center gap-1 flex-wrap">
								<Link href="/#" className="fs-5 fw-bold">HTML,</Link>
								<Link href="/#" className="fs-5 fw-bold">CSS,</Link>
								<Link href="/#" className="fs-5 fw-bold">JavaScript,</Link>
								<Link href="/#" className="fs-5 fw-bold">Blade,</Link>
								<Link href="/#" className="fs-5 fw-bold">Firebase,</Link>
								<Link href="/#" className="fs-5 fw-bold">Postman,</Link>
								<Link href="/#" className="fs-5 fw-bold">Jira,</Link>
								<Link href="/#" className="fs-5 fw-bold">Asana</Link>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}
