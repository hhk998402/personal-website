export default function Background() {
  return (
    <>
      <div className="wash" aria-hidden="true">
        <svg className="wash-tl" viewBox="0 0 560 560" preserveAspectRatio="xMinYMin slice">
          <defs>
            <filter id="wcRough1" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="38" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcRough2" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.025" numOctaves="2" seed="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="26" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcSoftenTL" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="11" />
            </filter>
          </defs>

          <g filter="url(#wcRough1)">
            <path
              d="M -40,-40 L 420,-40 C 380,40 330,90 280,135 C 220,190 175,235 130,300 C 95,350 65,400 35,460 C 10,500 -15,470 -40,440 Z"
              fill="#a8bcd9" opacity="0.34" filter="url(#wcSoftenTL)"
            />
          </g>
          <g filter="url(#wcRough2)">
            <path
              d="M -40,-40 L 320,-40 C 270,30 220,75 175,120 C 130,165 95,205 55,260 C 25,300 0,330 -40,350 Z"
              fill="#7e96bb" opacity="0.46" filter="url(#wcSoftenTL)"
            />
          </g>
          <g filter="url(#wcRough1)">
            <path
              d="M -40,-40 L 220,-40 C 175,15 135,50 95,90 C 60,125 30,160 -10,200 C -25,215 -35,225 -40,235 Z"
              fill="#5d7aab" opacity="0.5" filter="url(#wcSoftenTL)"
            />
          </g>
          <g filter="url(#wcRough2)">
            <path
              d="M -40,-40 L 110,-40 C 75,-5 45,25 10,60 C -10,80 -28,100 -40,115 Z"
              fill="#3f5e8c" opacity="0.55" filter="url(#wcSoftenTL)"
            />
          </g>
          <g filter="url(#wcRough1)" opacity="0.6">
            <path d="M -40,-40 L 40,-40 C 15,-15 -10,10 -40,30 Z" fill="#23406e" />
          </g>

          <circle cx="195" cy="62" r="2.4" fill="#a9802f" opacity="0.7" />
          <circle cx="168" cy="92" r="1.6" fill="#a9802f" opacity="0.6" />
          <circle cx="222" cy="100" r="1.3" fill="#7e96bb" opacity="0.5" />
          <circle cx="140" cy="130" r="1.8" fill="#a9802f" opacity="0.55" />
          <circle cx="245" cy="40" r="1.2" fill="#a9802f" opacity="0.45" />
          <circle cx="270" cy="75" r="1.0" fill="#7e96bb" opacity="0.4" />
          <circle cx="205" cy="135" r="1.4" fill="#a9802f" opacity="0.5" />
          <circle cx="95" cy="160" r="1.1" fill="#7e96bb" opacity="0.45" />
          <circle cx="290" cy="110" r="0.9" fill="#a9802f" opacity="0.4" />
          <circle cx="60" cy="195" r="1.3" fill="#5d7aab" opacity="0.4" />
          <circle cx="175" cy="165" r="0.8" fill="#a9802f" opacity="0.4" />
          <circle cx="310" cy="60" r="1.0" fill="#7e96bb" opacity="0.35" />
          <circle cx="35" cy="240" r="1.5" fill="#5d7aab" opacity="0.4" />
          <circle cx="125" cy="55" r="0.9" fill="#a9802f" opacity="0.4" />
        </svg>

        <svg className="wash-br" viewBox="0 0 620 640" preserveAspectRatio="xMaxYMax slice">
          <defs>
            <filter id="wcRough3" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="3" seed="11" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcRough4" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.018 0.022" numOctaves="2" seed="19" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcSoftenBR" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="wcVeinTurb" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.06 0.09" numOctaves="2" seed="5" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="10" />
            </filter>
          </defs>

          <g filter="url(#wcRough3)">
            <path
              d="M 660,680 L 240,680 C 320,600 400,540 470,460 C 540,385 580,310 620,235 C 645,190 670,210 660,250 Z"
              fill="#a8bcd9" opacity="0.32" filter="url(#wcSoftenBR)"
            />
          </g>
          <g filter="url(#wcRough4)">
            <path
              d="M 660,680 L 330,680 C 400,610 460,555 520,480 C 565,425 595,375 630,320 L 660,330 Z"
              fill="#7e96bb" opacity="0.44" filter="url(#wcSoftenBR)"
            />
          </g>
          <g filter="url(#wcRough3)">
            <path
              d="M 660,680 L 420,680 C 470,625 510,580 545,535 C 575,495 600,455 630,410 L 660,420 Z"
              fill="#5d7aab" opacity="0.5" filter="url(#wcSoftenBR)"
            />
          </g>
          <g filter="url(#wcRough4)">
            <path
              d="M 660,680 L 520,680 C 555,640 580,610 610,575 C 630,550 645,525 660,500 Z"
              fill="#3f5e8c" opacity="0.55" filter="url(#wcSoftenBR)"
            />
          </g>
          <g filter="url(#wcRough3)" opacity="0.6">
            <path d="M 660,680 L 590,680 C 615,650 635,625 660,595 Z" fill="#23406e" />
          </g>

          <path
            d="M 660,560 C 600,500 540,460 460,430 C 400,408 360,395 320,385"
            fill="none" stroke="#a9802f" strokeWidth="1.3" opacity="0.65" filter="url(#wcVeinTurb)"
          />
          <path
            d="M 660,500 C 610,455 565,430 510,415"
            fill="none" stroke="#a9802f" strokeWidth="0.8" opacity="0.5" filter="url(#wcVeinTurb)"
          />
          <path
            d="M 520,430 C 500,410 470,400 440,395"
            fill="none" stroke="#a9802f" strokeWidth="0.6" opacity="0.4" filter="url(#wcVeinTurb)"
          />
          <path
            d="M 440,425 C 460,440 480,455 500,475"
            fill="none" stroke="#a9802f" strokeWidth="0.5" opacity="0.35" filter="url(#wcVeinTurb)"
          />

          <circle cx="470" cy="500" r="2.6" fill="#a9802f" opacity="0.7" />
          <circle cx="510" cy="540" r="1.6" fill="#a9802f" opacity="0.55" />
          <circle cx="440" cy="460" r="1.3" fill="#7e96bb" opacity="0.5" />
          <circle cx="560" cy="470" r="1.9" fill="#a9802f" opacity="0.5" />
          <circle cx="400" cy="430" r="1.2" fill="#7e96bb" opacity="0.45" />
          <circle cx="585" cy="540" r="1.4" fill="#a9802f" opacity="0.4" />
          <circle cx="525" cy="500" r="1.0" fill="#a9802f" opacity="0.4" />
          <circle cx="450" cy="380" r="1.1" fill="#7e96bb" opacity="0.4" />
          <circle cx="600" cy="500" r="0.9" fill="#a9802f" opacity="0.4" />
          <circle cx="380" cy="400" r="1.3" fill="#5d7aab" opacity="0.4" />
          <circle cx="495" cy="450" r="0.8" fill="#a9802f" opacity="0.4" />
          <circle cx="610" cy="450" r="1.0" fill="#7e96bb" opacity="0.35" />
          <circle cx="350" cy="455" r="1.4" fill="#5d7aab" opacity="0.4" />
          <circle cx="540" cy="585" r="0.9" fill="#a9802f" opacity="0.4" />
        </svg>
      </div>
      <div className="frame" aria-hidden="true"></div>
    </>
  )
}