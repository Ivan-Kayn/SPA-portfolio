import React from 'react';
import Footer from "../../footer/Footer";
import NavbarComponent from "../../navbar/NavbarComponent";
import Works from "../../works/Works";
import {Container, Row} from "reactstrap";
import {connect} from 'react-redux';
import {filterProjects, selectProject, toggleModal} from '../../../actions/index';
import SearchBar from "../../searchBar/SearchBar";
import './WorksPage.scss';
import ProjectsModal from "../../projectsModal/ProjectsModal";

const WorksPage = ({projects, selectProject, filterProjects, language, projectsPage}) => {

    const projectsStrings = projectsPage[language];

    return (
        <>
            <NavbarComponent/>

            <Container className='pt-6 mb-5 '>
                <h1 className='text-center'> {projectsStrings.header} </h1>

                <Row className='justify-content-center my-2'>
                    <SearchBar/>
                    <div className="works__nav">
                        <span className="works__nav-link"
                              onClick={() => filterProjects('all')}>
                            {projectsStrings.all}
                        </span>
                        <span className="works__nav-link"
                              onClick={() => filterProjects('app')}>
                            {projectsStrings.app}
                        </span>
                        <span className="works__nav-link"
                              onClick={() => filterProjects('website')}>
                            {projectsStrings.website}
                        </span>
                        <span className="works__nav-link"
                              onClick={() => filterProjects('game')}>
                            {projectsStrings.game}
                        </span>
                    </div>

                </Row>

                <Row className='justify-content-center'>
                    {
                        projects.map(project => {
                            return <Works
                                key={project.id}
                                project={project}
                                onSelectProject={() => selectProject(project.id)}
                            />
                        })
                    }
                </Row>
                <ProjectsModal/>
            </Container>
            <Footer/>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        projectsPage: state.projectsPage,
        language: state.language,
    }
}

const mapDispatchToProps = {
    selectProject: selectProject,
    toggleModal: toggleModal,
    filterProjects: filterProjects,

}

export default connect(mapStateToProps, mapDispatchToProps)(WorksPage);