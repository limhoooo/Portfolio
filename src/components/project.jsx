import React from 'react';
import ProjectItem from './project/projectItem';

const Project = (props) => {
    const project = [
        {
            title: 'React와 Youtube Api 이용한 유투브 클론코딩 사이트',
            skills: 'React, React-router, javascript, html, css',
            imagePath: '/image/youtobe.png',
            demo: 'https://limhoooo-react-youtube.netlify.app/',
            github: 'https://github.com/limhoooo/react-youtube',
        },
        {
            title: 'vue.js와 News Api 를 이용한 게시판',
            skills: 'vue, vuex, vue-router, javascript',
            imagePath: '/image/newsApp.png',
            demo: 'https://limhoooo-vue-newsapp.netlify.app',
            github: 'https://github.com/limhoooo/vue-NewApp',
        },
        {
            title: 'Vanilla JS 를 이용한 토끼잡기 게임',
            skills: 'html, css, javascript',
            imagePath: '/image/rabbit.png',
            demo: 'https://limhoooo-game-carrot.netlify.app/',
            github: 'https://github.com/limhoooo/javascript',
        },
        {
            title: 'Vanilla JS 를 이용한 브라우저 좌표찾기',
            skills: 'html, css, javascript',
            imagePath: '/image/coordinates.png',
            demo: 'https://limhoooo-game-coordinates.netlify.app',
            github: 'https://github.com/limhoooo/javascript',
        },
        {
            title: 'React 를 이용한 포트폴리오 사이트',
            skills: 'React, React-router, javascript, html, css',
            imagePath: '/image/protfoilo.png',
            demo: 'https://limhoooo-game-coordinates.netlify.app',
            github: 'https://github.com/limhoooo/javascript',
        }
    ]
    return (
        <section class="sectionBox project">
            <div className='projectFlex'>
                {
                    project.map(item =>
                        <ProjectItem project={item} />
                    )
                }

            </div>
        </section>
    )
};

export default Project;