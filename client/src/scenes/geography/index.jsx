import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetGeographyQuery } from 'state/api';
import Header from 'components/Header';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from 'state/geography';

const Geography = () => {

  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();
  console.log('data', data)

  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='GEOGRAPHY' subtitle='See where your users are located!!!' />
      <Box
        mt='40px'
        height='75vh'
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius='4px'
      >
        {data ? (
          // original code snippet from ------ https://nivo.rocks/choropleth/
          <ResponsiveChoropleth  
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200]
              }
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200]
              }
            },
            tick: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200]
              }
            }
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200]
            }
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main 
            }
          }
        }}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
        //colors="nivo"
        domain={[ 0, 60 ]}       // adjust increment range for legend
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        ProjectScale={150}
        projectionTranslation={[ 0.4, 0.6 ]}    // originally .5 .5
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.secondary.alt,
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />) :  <>Loading...</>}
      </Box>
    </Box>
  )
}

export default Geography;