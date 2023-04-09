import {ProjectList, ProjectListItem, ProjectRole, RoleListItem, ProjectLinksWrapper, ProjectsTitle, RoleList, ProjectSubtitle, ProjectLink, ProjectText} from './Projects.styled'

const Projects = () => {
  return (
    <div>
      <ProjectList>
      <ProjectListItem>
          <ProjectsTitle>
            Petly
          </ProjectsTitle>
          <ProjectText>An app for easy search, purchase, or sale pets.</ProjectText>
          <ProjectSubtitle>
            [ HTML, SASS, responsive design, JS, React, Redux, Node.JS, Axios, REST Api,
            Webpack ]
          </ProjectSubtitle>
          <ProjectRole>Role:</ProjectRole>
          <RoleList>
            <RoleListItem>Implement uploading of popular movies to the main page</RoleListItem>
            <RoleListItem>Make a single film card template</RoleListItem>
            <RoleListItem>
              Create a modal-window template for one film (mobile phone, tablet,
              desktop)
            </RoleListItem>
          </RoleList>
          <ProjectLinksWrapper>
          <ProjectLink
            target="_blank"
            href="victoriamyzyniuk.github.io/JS-project-07/"
            rel="noreferrer"
          >
            Live page
          </ProjectLink>
          <ProjectLink
            target="_blank"
            href="https://github.com/VictoriaMyzyniuk/JS-project-07.git"
            rel="noreferrer"
          >
            Github repository
          </ProjectLink>
          </ProjectLinksWrapper>

        </ProjectListItem>
        <ProjectListItem>
          <ProjectsTitle>Web studio</ProjectsTitle>
          <ProjectText>Website for web studio with responsive design.</ProjectText>
          <ProjectSubtitle>[ HTML, SASS, responsive design, JS ]</ProjectSubtitle>
          <ProjectLinksWrapper>
          <ProjectLink
            target="_blank"
            href="https://andreykapus.github.io/goit-markup-hw-08/"
            rel="noreferrer"
          >
            Live page
          </ProjectLink>
          <ProjectLink
            target="_blank"
            href="https://github.com/AndreyKapus/goit-markup-hw-08.git"
            rel="noreferrer"
          >
            Github repository
          </ProjectLink>
          </ProjectLinksWrapper>
        </ProjectListItem>
        <ProjectListItem>
          <ProjectsTitle>Ice cream</ProjectsTitle>
          <ProjectText>Website that sells ice cream. Team project</ProjectText>
          <ProjectSubtitle>[ HTML, SASS, CSS Grid, responsive design, JS ]</ProjectSubtitle>
          <ProjectRole>Role:</ProjectRole>
          <RoleList>
            <RoleListItem>Creating a responsive footer;</RoleListItem>
            <RoleListItem>Adding a map with points of issue</RoleListItem>
          </RoleList>
          <ProjectLinksWrapper>
          <ProjectLink
            target="_blank"
            href="https://victoriamyzyniuk.github.io/goit-team7-project/"
            rel="noreferrer"
          >
            Live page
          </ProjectLink>
          <ProjectLink
            target="_blank"
            href="https://github.com/VictoriaMyzyniuk/goit-team7-project.git"
            rel="noreferrer"
          >
            Github repository
          </ProjectLink>
          </ProjectLinksWrapper>
        </ProjectListItem>
        <ProjectListItem>
          <ProjectsTitle>
            Filmoteka
          </ProjectsTitle>
          <ProjectText>Application to create your own movie library. Team project</ProjectText>
          <ProjectSubtitle>
            [ HTML, SASS, responsive design, JS, Axios, REST Api,
            parcel ]
          </ProjectSubtitle>
          <ProjectRole>Role:</ProjectRole>
          <RoleList>
            <RoleListItem>Implement uploading of popular movies to the main page</RoleListItem>
            <RoleListItem>Make a single film card template</RoleListItem>
            <RoleListItem>
              Create a modal-window template for one film (mobile phone, tablet,
              desktop)
            </RoleListItem>
          </RoleList>
          <ProjectLinksWrapper>
          <ProjectLink
            target="_blank"
            href="victoriamyzyniuk.github.io/JS-project-07/"
            rel="noreferrer"
          >
            Live page
          </ProjectLink>
          <ProjectLink
            target="_blank"
            href="https://github.com/VictoriaMyzyniuk/JS-project-07.git"
            rel="noreferrer"
          >
            Github repository
          </ProjectLink>
          </ProjectLinksWrapper>

        </ProjectListItem>
      </ProjectList>
    </div>
  );
};

export default Projects;
