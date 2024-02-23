import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // import this segment from MUI

  return (
    <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={0} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Data Analytics
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>An overview, release notes and support information</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Transform your data into actionable insights with our advanced analytics services. 
          Our solutions offer intuitive dashboards and reporting tools that help you make informed decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* panel1 */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={0} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Data Management</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {/* You are currently not an owner */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Ensure your data's integrity with our robust data management services, 
          including data warehousing, cleaning, and integration. We streamline your data processes,
          making your data reliable and accessible.
          </Typography>
        </AccordionDetails>
      </Accordion>
            {/* panel2 */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Cloud Services
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
         pleaceholder
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Leverage the power of cloud computing with our secure and scalable cloud services.
           Whether it's cloud storage, computing, or database services, we have you covered.
          </Typography>
        </AccordionDetails>
      </Accordion>
       {/* panel3 */}
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Cybersecurity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: 'text.secondary' }}>
          Protect your valuable data assets from threats with our comprehensive 
          cybersecurity services. 
          From risk assessments to incident response, 
          we provide end-to-end security solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

// meet a problem  Line 94:  Parsing error: Only one default export allowed per module. (94:0) so removed 
// export default accordion
