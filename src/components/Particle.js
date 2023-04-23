import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <Particles

            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              position: {
                relative: true,
              },
                background: {
                    color: "#000000"
                  },
                  particles: {
                    color: { value: "#ff0000" },
                    move: {
                      direction: "top",
                      enable: true,
                      outModes: "out",
                      speed: 1
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800
                      },
                      value: 100
                    },
                    opacity: {
                      value: 0.7
                    },
                    shape: {
                      type: "circle"
                    },
                    size: {
                      value: 8
                    },
                    wobble: {
                      enable: true,
                      distance: 10,
                      speed: 10
                    },
                    zIndex: {
                      value: { min: 0, max: 100 }
                    }
                  }
            }}
        />
    )
}

export default Particle
