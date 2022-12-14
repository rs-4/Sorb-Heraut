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
      top: 1024,
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
      <img src={instagramlogo} className='Iconreseaux' style={{cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={tiktoklogo} className='Iconreseaux' style={{left:'60px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={youtubelogo} className='Iconreseaux' style={{left:'120px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={linkedinlogo} className='Iconreseaux' style={{left:'180px',cursor:'pointer'}}/></a>
      <a href={url} target="_blank" rel="noreferrer">
      <img src={facebooklogo} className='Iconreseaux' style={{left:'240px',cursor:'pointer'}}/></a>
      </div>
      <div className='texte'>
        <span className='Qui' onClick={scrollbar} style={{cursor:'pointer'}}>Qui sommes-nous ?</span>
        <span className='contact'style={{cursor:'pointer'}}>Contactez-nous !</span>        
      </div>
      <a className='TextePrincipal'>Prenez la parole !</a>
      <div className='Barre'/>  
      <div className='transi'/>
      <span className='TextHistoire'>Sorb???H??rauts est une association ??tudiante <br/>de d??bat et  d?????loquence visant ?? promouvoir la pratique<br/> 
de l???art oratoire au sein de l???Universit?? Paris 1 Panth??on-Sorbonne. <br/><br/>
Pour nous, l???objectif est simple : proposer chaque semaine <br/> un ??v??nement oratoire ouvert ?? tous les ??tudiants de Paris 1 <br/><br/>afin de promouvoir la pratique de l?????loquence. <br/><br/>
Nous souhaitons b??tir un environnement permettant ?? tout ??tudiant, d??butant ou plus avanc??,<br/> de pratiquer l?????loquence, dans une ambiance conviviale et bienveillante.<br/><br/>
 Permanences externes, joutes oratoires, proc??s fictifs??? <br/>Tous les moyens sont bons pour prendre la parole et transmettre votre message !</span>
      <span className='Titre'>D???o?? vient le nom Sorb???H??rauts</span>
      <div className='ImageF'>
       <img src={Image1} className='Image1'/>
       <img src={Image2} className='Image2'/>
       </div>
       <dic className='rectangle'/>
       <a className='droit'>Tout droits r??serv?? - Sorb???H??rauts </a>
            </div>
          

  );
}

export default App;