export default function Background() {
  return (
    <>
      {/* soft ambient watercolor wash, dialed back beneath the floral illustrations */}
      <div className="wash" aria-hidden="true">
        <svg className="wash-tl" viewBox="0 0 560 560" preserveAspectRatio="xMinYMin slice">
          <defs>
            <filter id="wcRough1" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="38" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcSoftenTL" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="13" />
            </filter>
          </defs>
          <g filter="url(#wcRough1)">
            <path
              d="M -40,-40 L 360,-40 C 300,40 250,90 200,140 C 150,190 110,235 70,300 C 45,345 20,390 -10,430 Z"
              fill="#a8bcd9" opacity="0.22" filter="url(#wcSoftenTL)"
            />
          </g>
        </svg>

        <svg className="wash-br" viewBox="0 0 620 640" preserveAspectRatio="xMaxYMax slice">
          <defs>
            <filter id="wcRough3" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.011 0.016" numOctaves="3" seed="11" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="42" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="wcSoftenBR" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>
          <g filter="url(#wcRough3)">
            <path
              d="M 660,680 L 300,680 C 380,600 450,540 510,470 C 565,400 600,330 630,260 L 660,270 Z"
              fill="#a8bcd9" opacity="0.2" filter="url(#wcSoftenBR)"
            />
          </g>
        </svg>
      </div>

      {/* original botanical illustration — blue cosmos, white anemone, forget-me-nots */}
      <div className="florals" aria-hidden="true">
        <svg className="floral-tl" viewBox="0 0 620 620" preserveAspectRatio="xMinYMin meet">
          <defs>
            <radialGradient id="fPetalBlueLg" cx="38%" cy="32%" r="70%">
              <stop offset="0%" stopColor="#d7e3f3" />
              <stop offset="55%" stopColor="#a9c1e3" />
              <stop offset="100%" stopColor="#7da0d1" />
            </radialGradient>
            <radialGradient id="fPetalBlueSm" cx="38%" cy="32%" r="70%">
              <stop offset="0%" stopColor="#c3d6ee" />
              <stop offset="60%" stopColor="#93b2dd" />
              <stop offset="100%" stopColor="#6f93c8" />
            </radialGradient>
            <radialGradient id="fPetalWhite" cx="35%" cy="28%" r="75%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f6f3ec" />
              <stop offset="100%" stopColor="#e8e2d3" />
            </radialGradient>
            <radialGradient id="fCenterDark" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#7a6342" />
              <stop offset="100%" stopColor="#352a1c" />
            </radialGradient>
            <path id="fPetalLg" d="M0,0 C-13,-10 -17,-30 -10,-48 C-5,-58 5,-58 10,-48 C17,-30 13,-10 0,0 Z" />
            <path id="fPetalAnemone" d="M0,0 C-16,-6 -24,-22 -20,-36 C-17,-47 17,-47 20,-36 C24,-22 16,-6 0,0 Z" />
          </defs>

          <g stroke="#9fae8f" strokeWidth="1.6" fill="none" opacity="0.8">
            <path d="M30,560 C70,460 95,370 115,290 C128,240 145,195 180,150" />
            <path d="M115,290 C160,260 200,240 250,215" />
            <path d="M70,400 C115,375 155,355 200,335" />
            <path d="M180,150 C220,120 255,100 300,80" />
          </g>

          <g>
            <g transform="translate(230,130)">
              <path d="M0,0 C10,-16 18,-30 30,-48 M12,-20 L24,-12 M20,-32 L32,-26 M-6,-8 L-18,0" stroke="#c2b696" strokeWidth="1" fill="none" opacity="0.75" />
              <circle cx="30" cy="-48" r="3.6" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              <circle cx="24" cy="-12" r="3" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              <circle cx="32" cy="-26" r="2.8" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              <circle cx="-18" cy="0" r="2.8" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
            </g>
            <g transform="translate(305,150)">
              <path d="M0,0 C12,-12 22,-22 36,-34 M16,-14 L28,-10" stroke="#c2b696" strokeWidth="1" fill="none" opacity="0.7" />
              <circle cx="36" cy="-34" r="3" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              <circle cx="28" cy="-10" r="2.4" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
            </g>
            <g transform="translate(95,470)">
              <path d="M0,0 C8,-14 10,-26 8,-40" stroke="#c2b696" strokeWidth="1" fill="none" opacity="0.7" />
              <circle cx="8" cy="-40" r="3.2" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              <circle cx="4" cy="-20" r="2.6" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
            </g>
          </g>

          <g fill="#8aa37c" opacity="0.92">
            <ellipse cx="125" cy="350" rx="24" ry="10" transform="rotate(-30 125 350)" />
            <ellipse cx="95" cy="410" rx="22" ry="9" transform="rotate(-48 95 410)" />
            <ellipse cx="180" cy="295" rx="20" ry="8.5" transform="rotate(20 180 295)" />
            <ellipse cx="225" cy="255" rx="18" ry="8" transform="rotate(35 225 255)" />
            <ellipse cx="70" cy="480" rx="20" ry="8" transform="rotate(-60 70 480)" />
            <ellipse cx="265" cy="225" rx="16" ry="7" transform="rotate(10 265 225)" />
            <ellipse cx="305" cy="105" rx="16" ry="7" transform="rotate(35 305 105)" />
          </g>
          <g fill="#9fb290" opacity="0.7">
            <ellipse cx="155" cy="375" rx="16" ry="6.5" transform="rotate(-15 155 375)" />
            <ellipse cx="200" cy="320" rx="14" ry="6" transform="rotate(40 200 320)" />
            <ellipse cx="80" cy="430" rx="14" ry="6" transform="rotate(-40 80 430)" />
          </g>

          <g transform="translate(300,165)">
            <g fill="#fffefb" stroke="#e6dfd0" strokeWidth="0.6">
              <use href="#fPetalAnemone" transform="scale(0.42) rotate(0)" />
              <use href="#fPetalAnemone" transform="scale(0.42) rotate(72)" />
              <use href="#fPetalAnemone" transform="scale(0.42) rotate(144)" />
              <use href="#fPetalAnemone" transform="scale(0.42) rotate(216)" />
              <use href="#fPetalAnemone" transform="scale(0.42) rotate(288)" />
            </g>
            <circle r="4.2" fill="#c9a557" />
          </g>
          <g transform="translate(65,310)">
            <g fill="#fffefb" stroke="#e6dfd0" strokeWidth="0.6">
              <use href="#fPetalAnemone" transform="scale(0.34) rotate(10)" />
              <use href="#fPetalAnemone" transform="scale(0.34) rotate(82)" />
              <use href="#fPetalAnemone" transform="scale(0.34) rotate(154)" />
              <use href="#fPetalAnemone" transform="scale(0.34) rotate(226)" />
              <use href="#fPetalAnemone" transform="scale(0.34) rotate(298)" />
            </g>
            <circle r="3.4" fill="#c9a557" />
          </g>

          <g>
            <g transform="translate(105,275) scale(0.55)">
              <g fill="#7396c9"><use href="#fPetalAnemone" transform="rotate(0)" /><use href="#fPetalAnemone" transform="rotate(72)" /><use href="#fPetalAnemone" transform="rotate(144)" /><use href="#fPetalAnemone" transform="rotate(216)" /><use href="#fPetalAnemone" transform="rotate(288)" /></g>
              <circle r="5" fill="#f4ead0" />
            </g>
            <g transform="translate(75,305) scale(0.42)">
              <g fill="#93b2dd"><use href="#fPetalAnemone" transform="rotate(15)" /><use href="#fPetalAnemone" transform="rotate(87)" /><use href="#fPetalAnemone" transform="rotate(159)" /><use href="#fPetalAnemone" transform="rotate(231)" /><use href="#fPetalAnemone" transform="rotate(303)" /></g>
              <circle r="5" fill="#f4ead0" />
            </g>
            <g transform="translate(140,245) scale(0.4)">
              <g fill="#7396c9"><use href="#fPetalAnemone" transform="rotate(30)" /><use href="#fPetalAnemone" transform="rotate(102)" /><use href="#fPetalAnemone" transform="rotate(174)" /><use href="#fPetalAnemone" transform="rotate(246)" /><use href="#fPetalAnemone" transform="rotate(318)" /></g>
              <circle r="5" fill="#f4ead0" />
            </g>
          </g>

          <g transform="translate(245,325) rotate(-8)">
            <g fill="url(#fPetalWhite)" stroke="#d8cfba" strokeWidth="0.7">
              <use href="#fPetalAnemone" transform="scale(1.55) rotate(0)" />
              <use href="#fPetalAnemone" transform="scale(1.55) rotate(72)" />
              <use href="#fPetalAnemone" transform="scale(1.55) rotate(144)" />
              <use href="#fPetalAnemone" transform="scale(1.55) rotate(216)" />
              <use href="#fPetalAnemone" transform="scale(1.55) rotate(288)" />
            </g>
            <circle r="15" fill="url(#fCenterDark)" />
            <g fill="#1f1810">
              <circle cx="-5" cy="-3" r="1.3" /><circle cx="4" cy="-5" r="1.2" /><circle cx="6" cy="3" r="1.3" />
              <circle cx="-3" cy="6" r="1.2" /><circle cx="0" cy="0" r="1.2" /><circle cx="-6" cy="2" r="1" /><circle cx="5" cy="-1" r="1" />
            </g>
          </g>

          <g transform="translate(148,268) rotate(4)">
            <g fill="url(#fPetalBlueLg)" stroke="#5d7aab" strokeWidth="0.7">
              <use href="#fPetalLg" transform="scale(1.7) rotate(0)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(45)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(90)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(135)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(180)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(225)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(270)" />
              <use href="#fPetalLg" transform="scale(1.7) rotate(315)" />
            </g>
            <circle r="17" fill="url(#fCenterDark)" />
            <g fill="#1f1810">
              <circle cx="-5" cy="-4" r="1.4" /><circle cx="5" cy="-5" r="1.3" /><circle cx="7" cy="4" r="1.4" />
              <circle cx="-4" cy="7" r="1.3" /><circle cx="0" cy="0" r="1.3" /><circle cx="-7" cy="1" r="1.1" /><circle cx="6" cy="-1" r="1.1" />
            </g>
          </g>

          <g transform="translate(208,245) rotate(20)">
            <g fill="url(#fPetalBlueSm)" stroke="#5d7aab" strokeWidth="0.6">
              <use href="#fPetalLg" transform="scale(1.05) rotate(0)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(51)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(102)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(153)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(204)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(255)" />
              <use href="#fPetalLg" transform="scale(1.05) rotate(306)" />
            </g>
            <circle r="10" fill="url(#fCenterDark)" />
          </g>

          <g transform="translate(78,358) rotate(-25) scale(0.6)">
            <g fill="url(#fPetalBlueSm)" stroke="#5d7aab" strokeWidth="0.7">
              <use href="#fPetalLg" transform="scale(1.1) rotate(0)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(51)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(102)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(153)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(204)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(255)" />
              <use href="#fPetalLg" transform="scale(1.1) rotate(306)" />
            </g>
            <circle r="10" fill="url(#fCenterDark)" />
          </g>

          <g fill="#a9802f" opacity="0.55">
            <circle cx="370" cy="100" r="1.4" />
            <circle cx="400" cy="140" r="1" />
            <circle cx="20" cy="190" r="1.2" />
            <circle cx="340" cy="60" r="1" />
            <circle cx="40" cy="540" r="1.1" />
          </g>
        </svg>

        {/* bottom-right corner: same botanical vocabulary, mirrored and rotated */}
        <svg className="floral-br" viewBox="0 0 620 620" preserveAspectRatio="xMaxYMax meet">
          <g transform="translate(620,620) rotate(180)">
            <g stroke="#9fae8f" strokeWidth="1.6" fill="none" opacity="0.8">
              <path d="M30,560 C70,460 95,370 115,290 C128,240 145,195 180,150" />
              <path d="M115,290 C160,260 200,240 250,215" />
              <path d="M70,400 C115,375 155,355 200,335" />
            </g>

            <g>
              <g transform="translate(230,130)">
                <path d="M0,0 C10,-16 18,-30 30,-48 M12,-20 L24,-12 M20,-32 L32,-26" stroke="#c2b696" strokeWidth="1" fill="none" opacity="0.75" />
                <circle cx="30" cy="-48" r="3.6" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
                <circle cx="24" cy="-12" r="3" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              </g>
              <g transform="translate(95,470)">
                <path d="M0,0 C8,-14 10,-26 8,-40" stroke="#c2b696" strokeWidth="1" fill="none" opacity="0.7" />
                <circle cx="8" cy="-40" r="3.2" fill="#fbf8f2" stroke="#d8cdb0" strokeWidth="0.6" />
              </g>
            </g>

            <g fill="#8aa37c" opacity="0.92">
              <ellipse cx="125" cy="350" rx="24" ry="10" transform="rotate(-30 125 350)" />
              <ellipse cx="95" cy="410" rx="22" ry="9" transform="rotate(-48 95 410)" />
              <ellipse cx="180" cy="295" rx="20" ry="8.5" transform="rotate(20 180 295)" />
              <ellipse cx="70" cy="480" rx="20" ry="8" transform="rotate(-60 70 480)" />
            </g>

            <g transform="translate(65,310)">
              <g fill="#fffefb" stroke="#e6dfd0" strokeWidth="0.6">
                <use href="#fPetalAnemone" transform="scale(0.34) rotate(10)" />
                <use href="#fPetalAnemone" transform="scale(0.34) rotate(82)" />
                <use href="#fPetalAnemone" transform="scale(0.34) rotate(154)" />
                <use href="#fPetalAnemone" transform="scale(0.34) rotate(226)" />
                <use href="#fPetalAnemone" transform="scale(0.34) rotate(298)" />
              </g>
              <circle r="3.4" fill="#c9a557" />
            </g>

            <g transform="translate(105,275) scale(0.55)">
              <g fill="#7396c9"><use href="#fPetalAnemone" transform="rotate(0)" /><use href="#fPetalAnemone" transform="rotate(72)" /><use href="#fPetalAnemone" transform="rotate(144)" /><use href="#fPetalAnemone" transform="rotate(216)" /><use href="#fPetalAnemone" transform="rotate(288)" /></g>
              <circle r="5" fill="#f4ead0" />
            </g>

            <g transform="translate(245,325) rotate(-8)">
              <g fill="url(#fPetalWhite)" stroke="#d8cfba" strokeWidth="0.7">
                <use href="#fPetalAnemone" transform="scale(1.55) rotate(0)" />
                <use href="#fPetalAnemone" transform="scale(1.55) rotate(72)" />
                <use href="#fPetalAnemone" transform="scale(1.55) rotate(144)" />
                <use href="#fPetalAnemone" transform="scale(1.55) rotate(216)" />
                <use href="#fPetalAnemone" transform="scale(1.55) rotate(288)" />
              </g>
              <circle r="15" fill="url(#fCenterDark)" />
              <g fill="#1f1810">
                <circle cx="-5" cy="-3" r="1.3" /><circle cx="4" cy="-5" r="1.2" /><circle cx="6" cy="3" r="1.3" />
                <circle cx="-3" cy="6" r="1.2" /><circle cx="0" cy="0" r="1.2" />
              </g>
            </g>

            <g transform="translate(148,268) rotate(4)">
              <g fill="url(#fPetalBlueLg)" stroke="#5d7aab" strokeWidth="0.7">
                <use href="#fPetalLg" transform="scale(1.7) rotate(0)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(45)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(90)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(135)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(180)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(225)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(270)" />
                <use href="#fPetalLg" transform="scale(1.7) rotate(315)" />
              </g>
              <circle r="17" fill="url(#fCenterDark)" />
              <g fill="#1f1810">
                <circle cx="-5" cy="-4" r="1.4" /><circle cx="5" cy="-5" r="1.3" /><circle cx="7" cy="4" r="1.4" />
                <circle cx="-4" cy="7" r="1.3" /><circle cx="0" cy="0" r="1.3" />
              </g>
            </g>

            <g transform="translate(208,245) rotate(20)">
              <g fill="url(#fPetalBlueSm)" stroke="#5d7aab" strokeWidth="0.6">
                <use href="#fPetalLg" transform="scale(1.05) rotate(0)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(51)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(102)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(153)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(204)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(255)" />
                <use href="#fPetalLg" transform="scale(1.05) rotate(306)" />
              </g>
              <circle r="10" fill="url(#fCenterDark)" />
            </g>

            <g fill="#a9802f" opacity="0.55">
              <circle cx="370" cy="100" r="1.4" />
              <circle cx="20" cy="190" r="1.2" />
              <circle cx="40" cy="540" r="1.1" />
            </g>
          </g>
        </svg>
      </div>

      <div className="frame" aria-hidden="true"></div>
    </>
  )
}