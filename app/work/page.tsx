'use client';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import projectsData from "@/app/work/projectsData";
import ProjectCarousel from "@/components/ProjectCarousel";
import {useState} from "react";

export default function Work() {
    const [selectedProject, setSelectedProject] = useState<null>(null);

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <section className="section-work pt-120 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-lg-auto text-center">
                            <Link href="https://github.com/HassanSalah25/"
                                  className="btn btn-gradient d-inline-block text-uppercase">Explore My Code</Link>
                            <h3 className="ds-3 mt-3 mb-4 text-dark">
                                Explore <span className="text-300">My Latest Work and Discover the</span> Craftsmanship
                                Behind <span className="text-300">Each Design</span>
                            </h3>
                            <p className="text-300 fs-5">
                                Welcome to a curated collection of the real-world projects I've built using Laravel,
                                WordPress, React, and other modern technologies. Below is a detailed list of my featured
                                work, designed to showcase my technical capabilities and development expertise. This
                                portfolio is crafted as a reference hub to share with HR professionals, clients, and
                                collaborators via platforms like LinkedIn and Fiverr.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row card-scroll mt-8">
                        <div className="cards">
                            {projectsData.map((project, index) => (
                                <div className="card-custom" data-index={index} key={project.title}>
                                    <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                        <ProjectCarousel project={project}/>
                                        <div className="card__content px-md-4 px-3">
                                            <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                <Link href={project.link || "#"} className="card_title_link">
                                                    <p className="text-primary-1 mb-0 mb-md-2">{project.category}</p>
                                                    <h3 className="fw-semibold">{project.title}</h3>
                                                </Link>
                                                <Link href={project.link || "#"}
                                                      className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                    <i className="ri-arrow-right-up-line"/>
                                                </Link>
                                            </div>
                                            <p className="text-300 mb-lg-auto mb-md-4 mb-3">{project.description}</p>
                                            <div className="d-md-flex content">
                                                <p className="mb-0 fs-7 text-dark text-uppercase w-40">Views</p>
                                                <div className="gap-3 my-1 flex-wrap">
                                                    {project.github && (
                                                        <a href={project.github} target="_blank"
                                                           rel="noopener noreferrer">
                                                            <i className="ri-github-fill me-1"></i>
                                                        </a>
                                                    )}
                                                    {project.link && (
                                                        <a href={project.link} target="_blank"
                                                           rel="noopener noreferrer">
                                                            <i className="ri-eye-line me-1"></i>
                                                        </a>
                                                    )}
                                                    <a
                                                        onClick={() => setSelectedProject(project)}
                                                        style={{cursor: "pointer"}}
                                                        className="text-light"
                                                        aria-label={`View details about ${project.title}`}
                                                    >
													<i className="ri-file-text-line"></i>
												</a>
                                                </div>
                                            </div>
                                            <div className="d-md-flex content">
                                                <p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
                                                <p className="mb-0 card__description text-300 fs-6">{project.tools}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {selectedProject && (
                                <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
                                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                        <button className="close-btn" onClick={() => setSelectedProject(null)}>✖
                                        </button>

                                        <h4 className="modal-title">{selectedProject.title}</h4>

                                        <h6>Description</h6>
                                        <p>{selectedProject.description}</p>

                                        <h6>Tools</h6>
                                        <p>{selectedProject.tools}</p>

                                        <p><strong>Date:</strong> {selectedProject.date}</p>

                                        {selectedProject.role && (
                                            <>
                                                <h6>Role</h6>
                                                <p>{selectedProject.role}</p>
                                            </>
                                        )}

                                        {selectedProject.responsibilities && (
                                            <>
                                                <h6>Responsibilities</h6>
                                                <ul>
                                                    {selectedProject.responsibilities.map((r, idx) => (
                                                        <li key={idx}>{r}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
