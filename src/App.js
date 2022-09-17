import './App.css';
import styled from 'styled-components';
import {useState} from 'react';
import Fond from './components/test.jpg'
import LogoDroit from './components/Logo_Blanc 1.png'
import Logo from './components/Title_copie 1.png'
import Image1 from './components/planche-histoire.png'
import Image2 from './components/planche-logo.png'

import tiktoklogo from './components/tiktok.png'
import youtubelogo from './components/ytb.png'
import linkedinlogo from './components/linkedin.png'
import facebooklogo from './components/facebook.png'
import instagramlogo from './components/insta.png'
import { useMediaQuery } from 'react-responsive'



  let url = "http://www.google.com"

  function scrollbar() {

    window.scrollTo({
      top: 50, 
      left: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  }



function App() {
  return (
    
    <div className="App">

      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <img src={Fond} className='Fond'/>
      <img src={LogoDroit} className='logoDroit'/>
      <img src={Logo} className='Logo'></img>

      <div className='logo1'>
      <a href={url} target="_blank" rel="noreferrer">       
      <img src={instagramlogo} className='Iconreseaux' style={{top:'614px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={tiktoklogo} className='Iconreseaux' style={{top:'614px',left:'60px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={youtubelogo} className='Iconreseaux' style={{top:'614px',left:'120px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={linkedinlogo} className='Iconreseaux' style={{top:'614px',left:'180px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={facebooklogo} className='Iconreseaux' style={{top:'614px',left:'240px',cursor:'pointer'}}/></a>
      </div>
      <div className='texte'>
        <a className='Qui' onClick={scrollbar} style={{cursor:'pointer'}}>Qui sommes-nous ?</a>
        <a  className='contact'style={{cursor:'pointer'}}>Contactez-nous !</a>        
      </div>
      <a className='TextePrincipal'>Prenez la parole !</a>
      <div className='Barre'/>  
      <div className='transi'/>
      <span className='TextHistoire'>Sorb’Hérauts est une association étudiante <br/>de débat et  d’éloquence visant à promouvoir la pratique<br/> 
de l’art oratoire au sein de l’Université Paris 1 Panthéon-Sorbonne. <br/><br/>
Pour nous, l’objectif est simple : proposer chaque semaine <br/> un évènement oratoire ouvert à tous les étudiants de Paris 1 <br/><br/>afin de promouvoir la pratique de l’éloquence. <br/><br/>
Nous souhaitons bâtir un environnement permettant à tout étudiant, débutant ou plus avancé,<br/> de pratiquer l’éloquence, dans une ambiance conviviale et bienveillante.<br/><br/>
 Permanences externes, joutes oratoires, procès fictifs… <br/>Tous les moyens sont bons pour prendre la parole et transmettre votre message !</span>
      <a className='Titre'>D’où vient le nom Sorb’Hérauts</a>
      <div className='ImageF'>
       <img src={Image1} className='Image1'/>
       <img src={Image2} className='Image2'/>
       </div>
       <dic className='rectangle'/>
       <a className='droit'>Tout droits réservé - Sorb’Hérauts </a>
            </div>
          

  );
}

export default App;