
import React, { Fragment, useState } from 'react';
import './Aboutcontent.css';

const Aboutcontent = () => {
    // Use useState with an initial state of 1
    const [toggleTab, setToggleTab] = useState(1);

    const toggleState = (index) => {
        setToggleTab(index);
    };

    return (
        <Fragment>
            <section className='about'>
                <div className='row'>
                    <div className='column'>
                        <div className='about_img'></div>
                    </div>
                    <div className='column'>
                        <div className='tabs'>
                            <div
                                className={toggleTab === 1 ? 'single_tab active_tab' : 'single_tab'}
                                onClick={() => toggleState(1)}
                            >
                                <h2>About Me</h2>
                            </div>
                            <div
                                className={toggleTab === 2 ? 'single_tab active_tab' : 'single_tab'}
                                onClick={() => toggleState(2)}
                            >
                                <h2>Skills</h2>
                            </div>
                            <div
                                className={toggleTab === 3 ? 'single_tab active_tab' : 'single_tab'}
                                onClick={() => toggleState(3)}
                            >
                                <h2>Experience</h2>
                            </div>
                        </div>
                        <div className='tab_content'>
                            {/* About content */}
                            <div className={toggleTab === 1 ? 'content active_content' : 'content'}>
                                <h2>Education</h2>
                                <div className='tab_content'>
                                    <h3>UG</h3>
                                    <pre>Karpagam Institute of Technolog</pre>
                                    <pre>B.E - Electrical and Electronics Enginering</pre>
                                    <pre><b>2015 -2019, Graduate with 7.5 CGPA</b></pre>

                                    <h3>HSC</h3>
                                    <pre> Sasurie Vidhya Bhavan Hr. Sec. School</pre>
                                    <pre> Computer Science</pre>
                                    <pre> <b> 2013-2015, Securied 86.3% in Public Exam</b></pre>

                                    <h3>SSLC</h3>
                                    <pre> Govt. Hr. Sec. School</pre>
                                    <pre> <b>2013-2012, Awarded 94% in Public Exam </b> </pre>
                                </div>
                            </div>
                            {/* About content */}
                            <div className={toggleTab === 2 ? 'content active_content' : 'content'}>
                                <h2>Skills</h2>
                                <p>
                                    Web Developer with a proven ability to adapt in both self-starting and
                                    collaborative environments while staying focused on achieving high-quality results
                                    under strict deadlines. Eager to obtain a challenging position at a prestigious
                                    company like Dream Version that will expand my learning and build upon my developer
                                    skills.
                                </p>
                                <div className='skills_row'>
                                    <div className='skills_column'>
                                        <div className='progress_wrap'>
                                            <h3>HTML,CSS</h3>
                                            <div className='progress'>
                                                <div className='progress_bar HTML_CSS'>
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_row'>
                                    <div className='skills_column'>
                                        <div className='progress_wrap'>
                                            <h3>JAVASCRIPT</h3>
                                            <div className='progress'>
                                                <div className='progress_bar JAVASCRIPT'>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_row'>
                                    <div className='skills_column'>
                                        <div className='progress_wrap'>
                                            <h3>PHP</h3>
                                            <div className='progress'>
                                                <div className='progress_bar PHP'>
                                                    <span>60%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_row'>
                                    <div className='skills_column'>
                                        <div className='progress_wrap'>
                                            <h3>MYSQL</h3>
                                            <div className='progress'>
                                                <div className='progress_bar MYSQL'>
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='skills_row'>
                                    <div className='skills_column'>
                                        <div className='progress_wrap'>
                                            <h3>REACT</h3>
                                            <div className='progress'>
                                                <div className='progress_bar REACT'>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleTab === 3 ? 'content active_content' : 'content'}>
                                <div className='exp_column'>
                                    <h2 className='heading'>Sr. Project Engineer </h2>
                                    <h3>M/s. MAS Solar Systems Private Limited </h3>
                                    <span>Experience - 4 years 2 Months (2019-2023)</span>
                                    <ul>
                                        <li>Preparing BOM</li>
                                        <li>Follow- ups on Net Metering from TANGEDCO till commissioning (CEIG, TNEB)
                                        </li>
                                        <li>Mw Government approval follow-ups till getting Service connection No. (NFR, CEIG, SLDC, Transmission
                                            Line Estimate & Bay Estimate, Commissioning Certificate)
                                        </li>
                                        <li>Govt and Private Tenders Follow-ups till commissioning</li>
                                        <li>Preparing Layout as per the Customer needs ( Basic level – Autcad)
                                        </li>
                                        <li>Project scheduling and Monitoring the Entire project, Listing out the
                                            Product Specifications clearly as per the Customer needs to the production
                                            department, Technical support to Marketing team, Direct Customer Follow-up for
                                            Project updates</li>
                                        <li>Preparing BOM</li>
                                    </ul>
                                    <h4>MY MAIN ACHIEVEMENT</h4>
                                    <ul>
                                        <li>Done 8 MW (2 MW, 2MW, 3MW, 1 MW - AC) projects Completed within time period by getting
                                            approvals from Tamilnadu TANGEDCO, TNEB(NCES, CEIG & Local EDC) without Manager Support
                                        </li>
                                        <li>Joined as Junior Executive in Tender department and promoted as Sr. Engineer in Projects
                                            Department with learning & Knowledge</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Aboutcontent;
