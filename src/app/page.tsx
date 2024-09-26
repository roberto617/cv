"use client";

import React from 'react';
import Image from 'next/image';
import img from '../app/images/img.png';
import { FaWhatsapp } from 'react-icons/fa';

const BasicNurseProfile: React.FC = () => {
  const nurse = {
    name: "Roberto Conqui",
    title: "Enfermero y Cuidador Domiciliario",
    bio: "Enfermero especializado con experiencia en cuidados domiciliarios, atención de urgencias y recuperación de adicciones. Comprometido con el bienestar integral de los pacientes y la promoción de la salud mental.",
    education: [
      { degree: "Tecnicatura Superior en Enfermería", institution: "Escuela de Salud - Instituto Cassatti", year: "2020-2022" },
      { degree: "Prof. en Educación Física (inconcluso)", institution: "Universidad Nacional de la Plata", year: "2020-2021" },
      { degree: "Masoterapia", institution: "Cruz Roja - Filial La Plata", year: "2018" }
    ],
    experience: [
      { position: "Cuidador Domiciliario - Enfermero", company: "Particular", period: "10/2020 - Presente", duties: ["Prestación de servicios de enfermería", "Cuidador", "Higiene", "Acompañamiento", "Estimulación cognitiva y motriz"] },
      { position: "Enfermero", company: "Centro de Recuperación San Francisco", period: "06/2022 - 04/2024", duties: ["Control de signos vitales", "Control de medicación psiquiátrica", "Acompañamiento/tránsito del usuario", "RCP"] },
      { position: "Sector de Enfermería", company: "UPA 6 - Los Hornos", period: "10/2020 - Presente", duties: ["Vacunatorio", "Triage", "Urgencias / Emergencias"] },
      { position: "Preparador Físico", company: "Club Universitario de Berisso - Cat FEM", period: "06/2024 - Presente", duties: ["Cuerpo técnico", "Calentamiento pre-competitivo", "Charla técnica"] }
    ],
    skills: [
      { name: "Buena Predisposición", level: 95 },
      { name: "Liderazgo", level: 90 },
      { name: "Buena comunicación", level: 92 },
      { name: "Versatilidad", level: 88 },
      { name: "Paciencia", level: 93 },
      { name: "Entrenamiento personal", level: 85 }
    ],
    projects: [
      { name: "POEMASQ'CURAN", description: "Proyecto de libro de historias y poemas escritos bajo mi autoría" }
    ],
    interests: ["Buen equipo de trabajo", "Buen ámbito laboral", "Salud mental - pacientes"],
    contact: {
      whatsapp: "+2216813753"
    }
  };

  const sectionStyle = {
    backgroundColor: '#0f1924',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    color: '#ffffff'
  };

  const headingStyle = {
    color: '#4a90e2',
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '15px'
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = nurse.contact.whatsapp.replace(/\+/g, '');
    const message = encodeURIComponent(`Hola ${nurse.name}, me gustaría hablar contigo sobre tus servicios de enfermería.`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a1118',
      color: '#ffffff',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      fontSize: '16px',
      lineHeight: '1.6'
    }}>
              <div style={{ flex: '1 1 300px', ...sectionStyle, order: 1 }}>
        <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Hola, soy {nurse.name}</h1>
        <div style={{ textAlign: 'center' }}>
            <Image
              src={img}
              alt="Foto de perfil"
              width={150}
              height={150}
              style={{
                borderRadius: '50%',
                border: '4px solid #4a90e2',
                margin: '0 auto 20px'
              }}
            />
            <p style={{ fontWeight: '500' }}>{nurse.title}</p>
          </div>
        </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 100%', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', color: '#4a90e2', marginBottom: '20px', fontWeight: '500' }}>{nurse.title}</h2>
          <p style={{ marginBottom: '20px', maxWidth: '600px' }}>{nurse.bio}</p>
          <div style={{ ...sectionStyle, order: 5 }}>
            <h3 style={headingStyle}>Contacto</h3>
            <p style={{ marginBottom: '20px' }}>¿Quieres hablar conmigo? ¡Contáctame por WhatsApp!</p>
            <button 
              onClick={handleWhatsAppClick}
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <FaWhatsapp size={24} />
              Chatear por WhatsApp
            </button>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', ...sectionStyle, order: 2 }}>
          <h3 style={headingStyle}>Mi Formación</h3>
          {nurse.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#4a90e2', fontWeight: '500' }}>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p style={{ fontSize: '14px', color: '#a0aec0' }}>{edu.year}</p>
            </div>
          ))}
        </div>

        <div style={{ flex: '1 1 300px', ...sectionStyle, order: 3 }}>
          <h3 style={headingStyle}>Experiencia</h3>
          {nurse.experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h4 style={{ color: '#4a90e2', fontWeight: '500' }}>{exp.position}</h4>
              <p>{exp.company}</p>
              <p style={{ fontSize: '14px', color: '#a0aec0' }}>{exp.period}</p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                {exp.duties.map((duty, dutyIndex) => (
                  <li key={dutyIndex}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ flex: '1 1 100%', ...sectionStyle, order: 4 }}>
          <h3 style={headingStyle}>Mis Competencias</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {nurse.skills.map((skill, index) => (
              <div key={index} style={{ flex: '1 1 200px', minWidth: '150px' }}>
                <p style={{ marginBottom: '5px' }}>{skill.name}</p>
                <div style={{ backgroundColor: '#1e2a38', borderRadius: '10px', height: '8px' }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    backgroundColor: '#4a90e2',
                    borderRadius: '10px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 100%', ...sectionStyle, order: 5 }}>
          <h3 style={headingStyle}>Proyectos Personales</h3>
          {nurse.projects.map((project, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#4a90e2', fontWeight: '500' }}>{project.name}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>

        <div style={{ flex: '1 1 100%', ...sectionStyle, order: 6 }}>
          <h3 style={headingStyle}>Intereses</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {nurse.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasicNurseProfile;