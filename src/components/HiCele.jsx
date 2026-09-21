import React, { useEffect, useState } from "react";

export default function HiCele() {
  const [messageNum, setMessageNum] = useState(0);
  const [showFlowers, setShowFlowers] = useState(false);
  const [flowerStage, setFlowerStage] = useState(0);

  const allMessages = [
    {
      titulo: "Holaa Cele✨",
      mensaje: "Por favor abrílo el 21 👉👈",
      boton: "Abrir",
    },
    {
      titulo: "💌",
      mensaje:
        "Quería regalarte algo, aunque sea de una forma distinta y ademas espero que hoy tengas un día muy lindo y que no te falten motivos para sonreír 😉",
      boton: "Siguiente",
    },
    {
      titulo: "💌",
      mensaje:
        "Me gusta mucho compartir partidas, charlas y esos ratitos en los que coincidimos 🫣",
      boton: "Siguiente",
    },
    {
      titulo: "🎁",
      mensaje: "Esto es para voss, espero que te saque una hermosa sonrisa 🫶",
      boton: "Abrir 🎁",
    },
  ];

  const changeMessage = () => {
    if (messageNum < allMessages.length - 1) {
      setMessageNum((prev) => prev + 1);
    } else {
      setShowFlowers(true);
    }
  };

  useEffect(() => {
    if (!showFlowers) return;

    const seedTimer = setTimeout(() => {
      setFlowerStage(1);
    }, 2200);

    const stemTimer = setTimeout(() => {
      setFlowerStage(2);
    }, 3700);

    const leavesTimer = setTimeout(() => {
      setFlowerStage(3);
    }, 4800);

    const flowersTimer = setTimeout(() => {
      setFlowerStage(4);
    }, 6000);

    return () => {
      clearTimeout(seedTimer);
      clearTimeout(stemTimer);
      clearTimeout(leavesTimer);
      clearTimeout(flowersTimer);
    };
  }, [showFlowers]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950">
      <div className="w-full max-w-2xl rounded-3xl shadow-2xl p-8 text-center">
        {!showFlowers ? (
          <>
            {/* =========================
                MENSAJES
            ========================= */}

            <h1 className="text-4xl font-serif !text-white mb-6">
              {allMessages[messageNum].titulo}
            </h1>

            <p className="font-bold text-white text-lg leading-7">
              {allMessages[messageNum].mensaje}
            </p>

            <div className="flex px-10 py-6 justify-center">
              <button
                onClick={changeMessage}
                className="
                  cursor-pointer
                  px-8 py-3
                  rounded-xl
                  text-white
                  font-bold
                  text-lg
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:shadow-violet-500/40
                  active:scale-95
                  bg-gradient-to-r
                  from-violet-500
                  via-purple-500
                  to-fuchsia-500
                  shadow-lg
                  shadow-violet-500/30
                  focus:ring-4
                  focus:ring-violet-300/40
                "
              >
                {allMessages[messageNum].boton}
              </button>
            </div>
          </>
        ) : (
          /* =========================
             ANIMACIÓN FINAL
          ========================= */

          <div className="min-h-[560px] flex flex-col items-center justify-center">
            {/* ==================================
                ETAPA 0
            ================================== */}

            {flowerStage === 0 && (
              <div className="animate-pulse">
                <h1 className="text-4xl font-serif !text-white mb-6">
                  Bueno...
                </h1>

                <p className="text-white font-bold text-xl">
                  Llegaste hasta acá ❤️
                </p>

                <p className="text-white/70 mt-4">Pero todavía falta algo...</p>
              </div>
            )}

            {/* ==================================
                ETAPA 1
                SEMILLA
            ================================== */}

            {flowerStage === 1 && (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-serif !text-white mb-10">
                  Esperá un poquito...
                </h1>

                <div className="text-6xl animate-bounce">🌱</div>
              </div>
            )}

            {/* ==================================
                ETAPA 2
                TALLO
            ================================== */}

            {flowerStage === 2 && (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-serif !text-white mb-8">
                  Está creciendo...
                </h1>

                <svg
                  width="180"
                  height="280"
                  viewBox="0 0 180 280"
                  className="animate-pulse"
                >
                  {/* Tallo */}
                  <path
                    d="M90 260 C90 210 88 150 90 85"
                    stroke="#4ADE80"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Hoja */}
                  <ellipse
                    cx="72"
                    cy="170"
                    rx="13"
                    ry="32"
                    fill="#4ADE80"
                    transform="rotate(-35 72 170)"
                  />

                  {/* Capullo */}
                  <circle cx="90" cy="70" r="18" fill="#FACC15" />
                </svg>
              </div>
            )}

            {/* ==================================
                ETAPA 3
                HOJAS
            ================================== */}

            {flowerStage === 3 && (
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-serif !text-white mb-6">
                  Casi está... 🌱
                </h1>

                <svg width="260" height="340" viewBox="0 0 260 340">
                  {/* Tallos */}
                  <g
                    stroke="#3F7F3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  >
                    <path d="M130 300 C125 230 80 160 55 90" />
                    <path d="M130 300 C125 220 105 130 100 65" />
                    <path d="M130 300 C130 200 130 120 130 50" />
                    <path d="M130 300 C140 220 160 130 165 65" />
                    <path d="M130 300 C140 230 185 160 205 95" />
                  </g>

                  {/* Hojas */}
                  <g fill="#3F9142">
                    <ellipse
                      cx="85"
                      cy="225"
                      rx="12"
                      ry="35"
                      transform="rotate(-45 85 225)"
                    />

                    <ellipse
                      cx="105"
                      cy="185"
                      rx="11"
                      ry="32"
                      transform="rotate(40 105 185)"
                    />

                    <ellipse
                      cx="170"
                      cy="215"
                      rx="12"
                      ry="35"
                      transform="rotate(-40 170 215)"
                    />

                    <ellipse
                      cx="185"
                      cy="250"
                      rx="12"
                      ry="35"
                      transform="rotate(45 185 250)"
                    />

                    <ellipse
                      cx="145"
                      cy="155"
                      rx="10"
                      ry="28"
                      transform="rotate(35 145 155)"
                    />
                  </g>
                </svg>
              </div>
            )}

            {/* ==================================
                ETAPA 4
                RAMO FINAL
            ================================== */}

            {flowerStage === 4 && (
              <div className="flex flex-col items-center animate-fade-in">
                <h1 className="text-4xl font-serif !text-white mb-3">
                  Para voss 💛
                </h1>

                <p className="text-white font-bold text-lg mb-5 py-2">
                  Felizz díaa Celee!
                </p>

                <svg
                  width="320"
                  height="420"
                  viewBox="0 0 320 420"
                  className="drop-shadow-2xl"
                >
                  {/* ==================================
                      TALLOS
                  ================================== */}

                  <g
                    stroke="#3F7F3F"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  >
                    <path d="M160 350 C145 280 90 190 70 100" />
                    <path d="M160 350 C150 270 120 170 115 75" />
                    <path d="M160 350 C160 250 160 150 160 55" />
                    <path d="M160 350 C170 260 200 160 205 75" />
                    <path d="M160 350 C175 280 230 190 250 105" />
                  </g>

                  {/* ==================================
                      HOJAS
                  ================================== */}

                  <g fill="#3F9142">
                    <ellipse
                      cx="105"
                      cy="245"
                      rx="13"
                      ry="38"
                      transform="rotate(-48 105 245)"
                    />

                    <ellipse
                      cx="130"
                      cy="210"
                      rx="12"
                      ry="35"
                      transform="rotate(45 130 210)"
                    />

                    <ellipse
                      cx="205"
                      cy="220"
                      rx="13"
                      ry="38"
                      transform="rotate(-35 205 220)"
                    />

                    <ellipse
                      cx="225"
                      cy="255"
                      rx="13"
                      ry="40"
                      transform="rotate(50 225 255)"
                    />

                    <ellipse
                      cx="150"
                      cy="170"
                      rx="10"
                      ry="30"
                      transform="rotate(-35 150 170)"
                    />
                  </g>

                  {/* ==================================
                      FLOR IZQUIERDA
                  ================================== */}

                  <g
                    className="animate-bounce"
                    style={{
                      animationDuration: "3s",
                      transformOrigin: "70px 100px",
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="70"
                        cy="82"
                        rx="11"
                        ry="27"
                        fill="#FFD43B"
                        transform={`rotate(${i * 30} 70 100)`}
                      />
                    ))}

                    <circle cx="70" cy="100" r="14" fill="#8B5A16" />

                    <circle cx="70" cy="100" r="7" fill="#6B4210" />
                  </g>

                  {/* ==================================
                      FLOR IZQUIERDA SUPERIOR
                  ================================== */}

                  <g
                    className="animate-bounce"
                    style={{
                      animationDuration: "3.2s",
                      animationDelay: "0.2s",
                      transformOrigin: "115px 75px",
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="115"
                        cy="57"
                        rx="10"
                        ry="25"
                        fill="#FFE066"
                        transform={`rotate(${i * 30} 115 75)`}
                      />
                    ))}

                    <circle cx="115" cy="75" r="13" fill="#9A6418" />
                  </g>

                  {/* ==================================
                      FLOR CENTRAL
                  ================================== */}

                  <g
                    className="animate-bounce"
                    style={{
                      animationDuration: "3.5s",
                      animationDelay: "0.4s",
                      transformOrigin: "160px 55px",
                    }}
                  >
                    {[...Array(14)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="160"
                        cy="35"
                        rx="12"
                        ry="30"
                        fill="#FFD43B"
                        transform={`rotate(${i * 25.7} 160 55)`}
                      />
                    ))}

                    <circle cx="160" cy="55" r="15" fill="#8B5A16" />

                    <circle cx="160" cy="55" r="7" fill="#70440D" />
                  </g>

                  {/* ==================================
                      FLOR DERECHA SUPERIOR
                  ================================== */}

                  <g
                    className="animate-bounce"
                    style={{
                      animationDuration: "3.2s",
                      animationDelay: "0.6s",
                      transformOrigin: "205px 75px",
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="205"
                        cy="57"
                        rx="10"
                        ry="25"
                        fill="#FFE066"
                        transform={`rotate(${i * 30} 205 75)`}
                      />
                    ))}

                    <circle cx="205" cy="75" r="13" fill="#946018" />
                  </g>

                  {/* ==================================
                      FLOR DERECHA
                  ================================== */}

                  <g
                    className="animate-bounce"
                    style={{
                      animationDuration: "3s",
                      animationDelay: "0.8s",
                      transformOrigin: "250px 105px",
                    }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="250"
                        cy="87"
                        rx="11"
                        ry="27"
                        fill="#FFD43B"
                        transform={`rotate(${i * 30} 250 105)`}
                      />
                    ))}

                    <circle cx="250" cy="105" r="14" fill="#8B5A16" />
                  </g>

                  {/* ==================================
                      PAPEL DEL RAMO
                  ================================== */}

                  <path
                    d="
                      M65 270
                      Q160 300 255 270
                      L215 410
                      Q160 390 105 410
                      Z
                    "
                    fill="#FFF8E7"
                    stroke="#E8D8B5"
                    strokeWidth="3"
                  />

                  {/* Pliegues */}
                  <path
                    d="M105 275 L125 400"
                    stroke="#E7D5AE"
                    strokeWidth="2"
                  />

                  <path
                    d="M160 290 L160 395"
                    stroke="#E7D5AE"
                    strokeWidth="2"
                  />

                  <path
                    d="M215 275 L195 400"
                    stroke="#E7D5AE"
                    strokeWidth="2"
                  />

                  {/* ==================================
                      CINTA
                  ================================== */}

                  <path
                    d="M130 325 Q160 340 190 325"
                    stroke="#E8B923"
                    strokeWidth="7"
                    fill="none"
                  />

                  <path
                    d="M150 333 L135 375"
                    stroke="#E8B923"
                    strokeWidth="6"
                  />

                  <path
                    d="M170 333 L185 375"
                    stroke="#E8B923"
                    strokeWidth="6"
                  />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
