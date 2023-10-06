import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() { 
  return (

    <div> 
      <Accordion square disableGutters sx={{
       border: "0.5px ridge #000",
       transition: "0.5s",

    '&:hover': {
      paddingRight: '24px',
      paddingLeft: '8px',
      backgroundColor: 'rgb(251, 255, 2)'
    },
      '&:hover:after': {
        opacity: 1,
        right: "10px",
      }
    
    }}>
        <AccordionSummary
        sx={{
            
            
        
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography          
          sx={{
            textTransform: "uppercase",
            fontfFamily: "'Roboto', sans-serif",
            margin: "0 auto",
            textIndent: "-350px",
            textDecoration: 'none',
            letterSpacing: '2px',
            fontWeight: '500px',
            fontSize: '1.75rem',
            transition: '0.5s',
          }}>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square disableGutters sx={{
               
               transition: "0.5s",
       
               '&:hover': {
                 paddingRight: '24px',
                 paddingLeft: '8px',
                 backgroundColor: 'rgb(251, 255, 2)',
               },
               '&:hover:after': {
                opacity: 1,
                right: "10px",
              },
    
    }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
              sx={{
                textTransform: "uppercase",
                fontfFamily: "'Roboto', sans-serif",
                margin: "0 auto",
                textIndent: "-300px",
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '500px',
                fontSize: '1.75rem',
                transition: '0.5s',
                
            
              }}>Projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square disableGutters sx={{
        border: "0.5px ridge #000",
        transition: "0.5s",

        '&:hover': {
          paddingRight: '24px',
          paddingLeft: '8px',
          backgroundColor: 'rgb(251, 255, 2)',
        },
        '&:hover:after': {
            opacity: 1,
            right: "10px",
          }
    }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
              sx={{
                textTransform: "uppercase",
                fontfFamily: "'Roboto', sans-serif",
                margin: "0 auto",
                textIndent: "-250px",
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '500px',
                fontSize: '1.75rem',
                transition: '0.5s',
        
            
              }}>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square disableGutters sx={{
              
               transition: "0.5s",
       
               '&:hover': {
                 paddingRight: '24px',
                 paddingLeft: '8px',
                 backgroundColor: 'rgb(251, 255, 2)',
               },
               '&:hover:after': {
                opacity: 1,
                right: "10px",
              },

    }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
              sx={{
                textTransform: "uppercase",
                fontfFamily: "'Roboto', sans-serif",
                margin: "0 auto",
                textIndent: "-200px",
                textDecoration: 'none',
                letterSpacing: '2px',
                fontWeight: '500px',
                fontSize: '1.75rem',
                transition: '0.5s',
                
            
              }}>Inquiry</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
     
    </div>
  
  );
}

