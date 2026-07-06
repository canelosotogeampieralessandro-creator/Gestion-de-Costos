import React, { useState, useEffect, useRef } from 'react';

// Componente de imagen optimizada con lazy loading
const OptimizedImage = ({ src, alt, className = "", onLoad = () => {} }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Usar la imagen directamente (Vite optimizará automáticamente)
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '50px' });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3C/svg%3E'}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`${className} ${isLoading ? 'animate-pulse bg-slate-200' : ''}`}
      onLoad={() => {
        setIsLoading(false);
        onLoad();
      }}
      onError={(e) => {
        setIsLoading(false);
        // Fallback a placeholder si la imagen falla
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="16"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
      }}
    />
  );
};

// --- Datos del informe ---
const reportData = {
  title: "Impacto en el Ambiente",
  modules: [
    {
      id: 1,
      title: "Impacto generado",
      proposals: [
        { id: 1, shortTitle: "Impacto 1", title: "La empresa enfrenta un alto riesgo de fallas catastróficas en presas de relaves húmedos, junto con un uso ineficiente y costoso del recurso hídrico.", fullTitle: "La empresa enfrenta un alto riesgo de fallas catastróficas en presas de relaves húmedos, junto con un uso ineficiente y costoso del recurso hídrico.", content: "Representación visual del riesgo en presas de relaves.", imageUrl: "https://lh3.googleusercontent.com/d/1qsaVKfBVzUHTpynbusriDU4eDv1agH7M" },
        { id: 2, shortTitle: "Impacto 2", title: "Existe una fuerte dependencia de combustibles fósiles y energía intensiva en carbono, lo que incrementa costos operativos y exposición a riesgos climáticos y financieros.", fullTitle: "Existe una fuerte dependencia de combustibles fósiles y energía intensiva en carbono, lo que incrementa costos operativos y exposición a riesgos climáticos y financieros.", content: "Gráfico de dependencia de combustibles fósiles.", imageUrl: "https://lh3.googleusercontent.com/d/1DXtKvm_v5IjUcH-ZVWGQhJ1Yk73xr4jY" },
        { id: 3, shortTitle: "Impacto 3", title: "La acumulación y postergación de pasivos ambientales mineros genera contingencias legales, sanciones económicas y deterioro de la imagen corporativa.", fullTitle: "La acumulación y postergación de pasivos ambientales mineros genera contingencias legales, sanciones económicas y deterioro de la imagen corporativa.", content: "Ilustración de pasivos ambientales.", imageUrl: "https://lh3.googleusercontent.com/d/1CDKIS2ccHeoKLR11M1j8jG4YMwmLB2PT" },
        { id: 4, shortTitle: "Impacto 4", title: "El manejo inadecuado de aguas ácidas y lodos residuales provoca riesgos de contaminación, multas regulatorias y conflictos sociales que afectan la continuidad operativa.", fullTitle: "El manejo inadecuado de aguas ácidas y lodos residuales provoca riesgos de contaminación, multas regulatorias y conflictos sociales que afectan la continuidad operativa.", content: "Fotografía de manejo de aguas.", imageUrl: "https://lh3.googleusercontent.com/d/1qvZbAmsRFNBnjZuQhLmUw4zkzOIbNHoV" },
      ]
    },
    {
      id: 2,
      title: "Propuesta de mejora",
      proposals: [
        { 
          id: 1, 
          shortTitle: "Propuesta 1", 
          title: "Transición Integral hacia Sistemas de Relaves Filtrados y Maximización de la Recirculación Hídrica.", 
          fullTitle: "Transición Integral hacia Sistemas de Relaves Filtrados y Maximización de la Recirculación Hídrica.", 
          imageUrl: "https://lh3.googleusercontent.com/d/1LJKuGO5cyGAxKMdmIrCR322YsF02NlrM",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                Implementación extensiva de <strong>plantas de filtrado mecánico de relaves</strong> (ej. Orcopampa) para reducir drásticamente la humedad antes de su disposición final, permitiendo un almacenamiento seguro y maximizando la eficiencia.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Reducción de OpEx</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">El agua recuperada retorna al ciclo cerrado (consolidando tasas de recirculación del 88%-99%), reduciendo tarifas hídricas y consumo energético por bombeo.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Mitigación de Riesgos</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">La disposición en estado semiseco elimina riesgos de licuefacción y colapso, impactando positivamente en las primas de seguros ambientales.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Cierre de Minas Eficiente</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">Simplifica la ingeniería civil en la etapa de cierre, reduciendo matemáticamente el valor presente de la provisión financiera (NIC 37).</p>
                </div>
              </div>
            </div>
          ) 
        },
        { 
          id: 2, 
          shortTitle: "Propuesta 2", 
          title: "Descarbonización Operativa y Cuantificación de la Huella de Carbono bajo Estándares ISO", 
          fullTitle: "Descarbonización Operativa y Cuantificación de la Huella de Carbono bajo Estándares ISO", 
          imageUrl: "https://lh3.googleusercontent.com/d/1ds33hNAh4FOMTQTABLs6dXPbYvFbfBjv",
          content: (
            <div className="flex flex-col gap-8 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                La dependencia de combustibles fósiles expone a la corporación a riesgos de transición climática. Se propone la ejecución de un <strong>programa agresivo de electrificación de la flota minera</strong> y la maximización del autoabastecimiento con energía renovable, apalancando activos limpios como la Central Hidroeléctrica Huanza.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">ISO 14064-1</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Medición rigurosa de gases de efecto invernadero para identificar con precisión forense las ineficiencias energéticas en cada unidad de negocio.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Optimización de Costos</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Contracción a corto plazo de partidas presupuestales destinadas a la adquisición de diésel, lubricantes, grasas y aceites de maquinaria.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Perfil ESG y Crédito</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Mejora crediticia que habilita la emisión de <em>Bonos Verdes</em> y préstamos vinculados a la sostenibilidad con tasas preferenciales.</p>
                </div>
              </div>
              <div className="mt-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#002855] py-4 px-6 border-b-4 border-[#EAAA00]">
                  <h4 className="text-white font-bold text-lg">Emisiones de GEI por Unidad Minera (Año 2024)</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-[#002855] text-sm md:text-base">
                        <th className="py-3 px-6 font-bold border-b border-slate-200">Unidad Minera</th>
                        <th className="py-3 px-6 font-bold border-b border-slate-200 text-right">Emisiones Directas (Cat 1)<br/><span className="text-xs font-normal">expresadas en tCO2e</span></th>
                        <th className="py-3 px-6 font-bold border-b border-slate-200 text-right">Emisiones Indirectas (Cat 2)<br/><span className="text-xs font-normal">expresadas en tCO2e</span></th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-sm md:text-base">
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#002855]">El Brocal</td>
                        <td className="py-4 px-6 text-right font-mono">36,156.00</td>
                        <td className="py-4 px-6 text-right font-mono">86,507.04</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#002855]">Julcani</td>
                        <td className="py-4 px-6 text-right font-mono">3,823.00</td>
                        <td className="py-4 px-6 text-right font-mono">4,148.30</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#002855]">Orcopampa</td>
                        <td className="py-4 px-6 text-right font-mono">3,488.00</td>
                        <td className="py-4 px-6 text-right font-mono">10,227.94</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#002855]">Tambomayo</td>
                        <td className="py-4 px-6 text-right font-mono">8,639.00</td>
                        <td className="py-4 px-6 text-right font-mono">10,044.96</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#002855]">Uchucchacua</td>
                        <td className="py-4 px-6 text-right font-mono">15,400.00</td>
                        <td className="py-4 px-6 text-right font-mono">15,908.31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 py-3 px-6 text-xs md:text-sm text-slate-500 italic">
                  <strong>Nota:</strong> Datos consolidados extraídos de la cuantificación oficial de emisiones corporativas de Compañía de Minas Buenaventura correspondientes a las fuentes de impacto primario.
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 3, 
          shortTitle: "Propuesta 3", 
          title: "Ejecución Proactiva y Acelerada del Cierre de Pasivos Ambientales Mineros (PAM)", 
          fullTitle: "Ejecución Proactiva y Acelerada del Cierre de Pasivos Ambientales Mineros (PAM)", 
          imageUrl: "https://lh3.googleusercontent.com/d/1qlhhIGrgXoRcqMSn65Z2nvPyQOwbpuzx",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                La inacción frente a los Pasivos Ambientales Mineros (PAM) inactivos genera cargas financieras y expone a la empresa a severas multas de hasta <strong>600 UIT</strong>. Se propone una estrategia corporativa de <strong>remediación voluntaria y acelerada</strong>, focalizando recursos en planes aprobados por el MINEM (áreas como <em>"Rifle Rumimaqui"</em>, <em>"Lircay"</em> y <em>"Hualgayoc"</em> operadas por Compañía Minera Colquirrumi S.A.).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Mitigación Legal y Reputacional</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Previene la imposición de multas coercitivas estatales escalonadas y reconstruye activamente la confianza corroida con las comunidades aledañas.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Optimización Contable (NIC 37)</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Extingue el pasivo financiero (valor presente) anticipadamente, mitigando el incremento por la tasa de descuento y reduciendo el apalancamiento en el balance general.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Generación de Escudos Fiscales</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Los gastos de remediación ambiental cumplen el <em>Principio de Causalidad</em>, optimizando la carga tributaria en ejercicios con altas utilidades operativas.</p>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 4, 
          shortTitle: "Propuesta 4", 
          title: "Implementación de Sistemas Avanzados de Tratamiento de Aguas Ácidas y Deshidratación de Lodos", 
          fullTitle: "Implementación de Sistemas Avanzados de Tratamiento de Aguas Ácidas y Deshidratación de Lodos", 
          imageUrl: "https://lh3.googleusercontent.com/d/1ysZ2mjdf30HGHiuil1rErg236zIYFqPO",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El manejo inadecuado de efluentes es una vulnerabilidad crítica ante el OEFA. Se propone inyectar capital en la <strong>modernización de la infraestructura hídrica</strong>, incorporando tecnología de punta (decantadores centrífugos industriales y sistemas automatizados) para optimizar el tratamiento de las aguas ácidas generadas en los socavones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Amortización del CapEx</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">La inversión en tecnología de separación sólido-líquido se amortiza rápidamente al evitar multas recurrentes y paralizaciones ordenadas por los reguladores.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Eficiencia Logística</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">El bajo contenido de humedad residual minimiza el volumen de lodos a transportar, reduciendo drásticamente costos logísticos y requerimientos de área de disposición.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Protección de Licencia Social</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Garantizar la calidad química de los efluentes previene conflictos sociales (ej. Orcopampa, Julcani) y asegura la continuidad ininterrumpida de las operaciones.</p>
                </div>
              </div>
            </div>
          )
        },
      ]
    },
    {
      id: 3,
      title: "Incentivos y Sanciones",
      subCategories: [
        { id: 'incentivos', title: "Incentivos Estructurales para Empresas que Adoptan Prácticas Ambientales Sostenibles y Excelencia Operativa" },
        { id: 'sanciones', title: "Sanciones Aplicables a Empresas que Evaden la Internalización de Costos Ambientales" }
      ],
      proposals: [
        { 
          id: 1, 
          subCategoryId: 'incentivos', 
          shortTitle: "Régimen OEFA", 
          title: "El Régimen de Incentivos del OEFA y la Emisión de Certificados de Descuento sobre Multas", 
          fullTitle: "El Régimen de Incentivos del OEFA y la Emisión de Certificados de Descuento sobre Multas", 
          imageUrl: "https://lh3.googleusercontent.com/d/1TCXolZZJcsSCGZ_f5Joz-tikRNv6FK_o",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                Operando en paralelo a su marco punitivo, la arquitectura normativa ambiental peruana reconoce de manera prospectiva y premia tangiblemente el esfuerzo corporativo que excede el mero cumplimiento regulatorio. Mediante la promulgación del Reglamento del Registro de Buenas Prácticas Ambientales y la estructuración del Régimen de Incentivos en el Ámbito de la Fiscalización Ambiental, el <strong>OEFA otorga incentivos de carácter honorífico y pecuniario</strong> a las unidades mineras y de procesamiento que demuestran estándares de excelencia que superan las exigencias de sus instrumentos de gestión ambiental.
              </p>
              
              <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm mt-2">
                <h4 className="text-lg font-bold text-[#002855] mb-4">Criterios Analíticos de Evaluación</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <span className="block text-2xl mb-2">💡</span>
                    <span className="text-sm font-bold text-green-900 leading-tight">Innovación Tecnológica</span>
                    <p className="text-xs text-green-800 mt-2">Implementación de procesos pioneros diseñados para maximizar la ecoeficiencia operativa.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <span className="block text-2xl mb-2">🔄</span>
                    <span className="text-sm font-bold text-green-900 leading-tight">Sostenibilidad y Replicabilidad</span>
                    <p className="text-xs text-green-800 mt-2">Capacidad técnica de sostener las mejoras a largo plazo y la viabilidad de reproducir las medidas.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <span className="block text-2xl mb-2">🌱</span>
                    <span className="text-sm font-bold text-green-900 leading-tight">Recuperación Ecológica</span>
                    <p className="text-xs text-green-800 mt-2">Evidencia tangible en la mejora o recuperación total de ambientes previamente degradados.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <span className="block text-2xl mb-2">🛡️</span>
                    <span className="text-sm font-bold text-green-900 leading-tight">Impacto Preventivo</span>
                    <p className="text-xs text-green-800 mt-2">Cuantificación y magnitud de los perjuicios y daños ambientales potenciales evitados.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002855] text-white p-6 rounded-xl shadow-md mt-2">
                <h4 className="text-[#EAAA00] font-bold text-lg mb-3">Beneficios Corporativos Exclusivos</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Las empresas que exhiben un historial impecable y carente de hallazgos durante las supervisiones periódicas son inscritas de oficio en el exclusivo <strong>Registro de Buenas Prácticas</strong>, estatus que mantienen por una vigencia renovable de 18 meses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">💰</span>
                      <h5 className="font-semibold text-white">Incentivo Económico</h5>
                    </div>
                    <p className="text-xs text-slate-300">
                      El Estado faculta al regulador para otorgar un <strong>"Certificado de Descuento sobre Multas"</strong> (indexado en UIT). Es un activo financiero en el balance, libremente transferible a terceros y con 4 años de vigencia.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🏆</span>
                      <h5 className="font-semibold text-white">Incentivo Honorífico</h5>
                    </div>
                    <p className="text-xs text-slate-300">
                      Galardones como el <em>Qumir Rapi</em>, el sello <em>Qumir Kawsay</em> y la inclusión en el Ranking de Excelencia Ambiental (REAL), elevan exponencialmente la calificación ESG de la compañía.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) 
        },
        { 
          id: 2, 
          subCategoryId: 'incentivos', 
          shortTitle: "Beneficios Fiscales", 
          title: "Beneficios Fiscales Estratégicos y Deducción de Gastos de Remediación Ambiental", 
          fullTitle: "Beneficios Fiscales Estratégicos y Deducción de Gastos de Remediación Ambiental", 
          imageUrl: "https://lh3.googleusercontent.com/d/1LJKuGO5cyGAxKMdmIrCR322YsF02NlrM",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El diseño contemporáneo de políticas macroeconómicas y tributarias proporciona incentivos contables excepcionalmente potentes para catalizar el saneamiento del territorio. La rigurosa legislación fiscal peruana reconoce explícitamente que <strong>los gastos de capital y operativos orientados a la protección activa del ambiente</strong> y a la remediación técnica de pasivos ambientales mineros constituyen erogaciones legítimas, necesarias y plenamente deducibles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Principio de Causalidad</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Los masivos gastos por remediación, compromisos sociales y cierre de mina se confrontan contablemente contra la renta neta gravable determinada en cada ejercicio fiscal.</p>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Escudos Fiscales</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Generan formidables escudos fiscales que aminoran la elevada presión tributaria agregada que recae históricamente sobre las corporaciones del sector extractivo.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Saneamiento del Territorio</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Al reducir el costo marginal de las obras de remediación, este alivio tributario incentiva directamente la limpieza voluntaria y sostenida del pasivo ecológico de la nación.</p>
                </div>
              </div>
            </div>
          ) 
        },
        { 
          id: 3, 
          subCategoryId: 'sanciones', 
          shortTitle: "Multas OEFA", 
          title: "Imposición de Multas Coercitivas y Sanciones Administrativas Punibles por el OEFA", 
          fullTitle: "Imposición de Multas Coercitivas y Sanciones Administrativas Punibles por el OEFA", 
          imageUrl: "https://lh3.googleusercontent.com/d/1tNcww3do6Ha9VnXoeqq2INtfc0W4V2v4",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El Estado peruano ejerce su potestad sancionadora (a través del <strong>OEFA</strong>) para penalizar económicamente a las empresas que intentan externalizar sus costos ambientales en detrimento del bienestar público, contraviniendo la normativa de protección ambiental.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Impacto en Utilidades</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Merman el flujo de caja operativo libre y las utilidades retenidas tras la imposición de multas millonarias por infracciones severas.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Deterioro Reputacional</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Afecta drásticamente la calificación ante acreedores financieros y aseguradoras, limitando y encareciendo el acceso a crédito.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Mecanismo Disuasorio</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Disuade la contención artificial de gastos operativos (OpEx) que debieron destinarse preventivamente al control ambiental.</p>
                </div>
              </div>
            </div>
          ) 
        },
        { 
          id: 4, 
          subCategoryId: 'sanciones', 
          shortTitle: "Fricción Social y Licencia", 
          title: "Costos de Fricción Social, Pérdida de la Licencia Operativa y Lucro Cesante", 
          fullTitle: "Costos de Fricción Social, Pérdida de la Licencia Operativa y Lucro Cesante", 
          imageUrl: "https://lh3.googleusercontent.com/d/12KYGYMdZasZavUPwg7qaQDBkuSc4J1Zo",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                La sanción financiera más devastadora no proviene del regulador, sino de la <strong>acción directa de los actores sociales</strong>. Las movilizaciones y bloqueos territoriales precipitan crisis que fuerzan la paralización temporal de las operaciones extractivas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Costos Fijos Ineludibles</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">La unidad minera continúa devengando costos masivos (mantenimiento, bombeo continuo de aguas, salarios) durante la paralización.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Colapso de Ingresos</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">La generación de ingresos por venta de concentrados y doré colapsa drásticamente a cero tras la suspensión de actividades operativas.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Destrucción de VPN</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Este "lucro cesante" destruye valor presente neto para el accionista a una velocidad infinitamente mayor que el presupuesto de prevención.</p>
                </div>
              </div>
            </div>
          ) 
        },
      ]
    },
    {
      id: 4,
      title: "Acuerdos internacionales",
      proposals: [
        { 
          id: 1, 
          shortTitle: "Acuerdo de París", 
          title: "El Acuerdo de París y la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC)", 
          fullTitle: "El Acuerdo de París y la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC)", 
          imageUrl: "https://lh3.googleusercontent.com/d/1vX76jVTo6WSIZwEfJf13SKNF0E_e6cuB",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                A diferencia de los impactos locales extractivos, el cambio climático es un desafío global y sistémico. El <strong>Acuerdo de París</strong> (bajo la CMNUCC) compromete a las naciones a reestructurar sus economías para mantener el incremento de temperatura por debajo de los <strong>2°C (con esfuerzos hacia 1.5°C)</strong>, exigiendo a la minería ambiciosos planes de descarbonización.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   Aplicación del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Auditoría de Emisiones</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Buenaventura ha iniciado la medición meticulosa de su huella de carbono, documentando emisiones directas en flota (Alcance 1) e indirectas de la red interconectada (Alcance 2).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Transición Energética</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Se destinan cuantiosos recursos de capital para acelerar la electrificación de procesos extractivos/metalúrgicos y optimizar el uso de energía renovable (planta hidroeléctrica).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Transparencia Financiera (NIIF S2)</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Forzando a modelar escenarios financieros prospectivos donde la volatilidad del precio del carbono y eventos climáticos impactan la valoración intrínseca de los activos.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 2, 
          shortTitle: "Acuerdo de Escazú", 
          title: "El Acuerdo de Escazú", 
          fullTitle: "El Acuerdo de Escazú", 
          imageUrl: "https://lh3.googleusercontent.com/d/1UnG5ZBSbOSpq9ilSCNubfI4RfezN7D9C",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El <strong>Acuerdo de Escazú</strong> representa un hito al entrelazar la doctrina de los derechos humanos con la gobernanza ambiental corporativa. En el contexto de la conflictividad socioambiental peruana, este tratado adquiere una <strong>relevancia estratégica incalculable</strong> para el modelamiento del riesgo corporativo de la industria extractiva a gran escala.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   Aplicación del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Transparencia Extrema</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige la adopción de una política incondicional frente al escrutinio civil respecto a la elaboración de líneas base y publicación irrestricta de Estudios de Impacto Ambiental (EIA).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Protección de Defensores</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Instituye mandatos explícitos y sin precedentes para asegurar la protección física y jurídica de los defensores de los derechos humanos en asuntos ambientales.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Diplomacia Preventiva</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Erradicar asimetrías de información técnica actúa como mecanismo para desactivar bloqueos comunitarios, garantizando viabilidad y certidumbre financiera a largo plazo.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 3, 
          shortTitle: "Convenio de Basilea", 
          title: "El Convenio de Basilea", 
          fullTitle: "El Convenio de Basilea", 
          imageUrl: "https://lh3.googleusercontent.com/d/18_lQ325__U5grOhVWKi5lk8hSfPLhmKo",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El <strong>Convenio de Basilea</strong> constituye la piedra angular regulatoria para el control exhaustivo y la trazabilidad de movimientos transfronterizos de desechos peligrosos, estableciendo mecanismos estrictos para autorizar el tránsito de residuos químicos complejos, lodos tóxicos y desechos metálicos.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   Aplicación del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Gestión de Residuos Especializados</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Impone obligaciones colosales para el manejo logístico y jurídico de lodos precipitados, residuos de cianuración y escorias generadas a escala industrial.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Internalización de Costos In Situ</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige un tratamiento ambientalmente racional en el origen, asumiendo altos costos en tecnología especializada, fletes y pólizas de seguros de riesgo ambiental.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Prevención de Arbitraje Regulatorio</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Previene eficazmente que los pasivos tóxicos y voluminosos sean exportados de manera oportunista hacia jurisdicciones con marcos de control ambiental endebles.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 4, 
          shortTitle: "Convenio de Minamata", 
          title: "El Convenio de Minamata sobre el Mercurio", 
          fullTitle: "El Convenio de Minamata sobre el Mercurio", 
          imageUrl: "https://lh3.googleusercontent.com/d/1w6qySl7teQLt_D7bHI_xdFu9xcQeO3ZT",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El <strong>Convenio de Minamata</strong> es un tratado vinculante (PNUMA) diseñado para proteger la salud y el ecosistema de las emisiones de mercurio. Regula exhaustivamente todo su ciclo de vida, imponiendo controles estrictos sobre fuentes, redes de comercio y disposición final.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   Aplicación del convenio en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Vigilancia Sanitaria Interna</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige elevar los estándares corporativos de salud ocupacional frente al riesgo tóxico, protegiendo al personal y mitigando impactos directos en el ecosistema.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Auditoría de Cadena de Suministro</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Someterse a auditorías rigurosas para evitar comercializar oro contaminado, distanciándose claramente de las prácticas informales de la minería artesanal (MAPE).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Control Tecnológico de Efluentes</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Mantener un control exhaustivo en efluentes metalúrgicos, garantizando ante organismos internacionales que las trazas de mercurio liberadas se mantengan bajo los límites permisibles.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
      ]
    }
  ],
  channels: {
    title: "Canales de comunicación",
    items: [
      { 
        id: 1, 
        shortTitle: "Canal 1", 
        title: "Cuadros de Mando Integrales", 
        fullTitle: "Cuadros de Mando Integrales (Dashboards) de Contabilidad Ambiental Operativa en Tiempo Real", 
        hasDashboard: true,
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              La contabilidad de costos ambientales revela su verdadero valor al integrarse simbióticamente en los sistemas ERP diarios. Se propone la implementación de un <strong>Dashboard Operativo Ambiental interactivo</strong> en las salas de control, diseñado para monetizar en tiempo real ineficiencias como el consumo excesivo de agua fresca, picos de demanda energética y la tasa de generación de residuos.
            </p>
          </div>
        ) 
      },
      { 
        id: 2, 
        shortTitle: "Canal 2", 
        title: "Reportes de Sostenibilidad", 
        fullTitle: "Reportes de Sostenibilidad Corporativa y la Deconstrucción de Memorias Integradas", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              Canal institucional que consiste en <strong>deconstruir pedagógicamente los extensos reportes técnicos de sostenibilidad</strong> (presentados ante la SMV) en sesiones plenarias, diseñando un flujo de información claro desde la gerencia general hacia los líderes operativos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Métricas y Valor Bursátil</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Demuestra empíricamente cómo métricas abstractas (huella hídrica ISO 14046 y huella de carbono) afectan directamente la rentabilidad y la percepción del mercado sobre la firma.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">"El Tono en la Cima"</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Al distribuir resúmenes a todo el personal, la alta gerencia comunica que el éxito corporativo se cuantifica hoy por la eficiencia ecológica y no solo por las onzas de mineral extraídas.</p>
              </div>
            </div>
          </div>
        ) 
      },
      { 
        id: 3, 
        shortTitle: "Canal 3", 
        title: "Capacitación NIIF S1 y S2", 
        fullTitle: "Programas de Inmersión y Capacitación Financiero-Ambiental sobre Estándares NIIF S1 y S2", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              Ejecución sistemática de <strong>módulos de capacitación interna y talleres interdepartamentales</strong> para explicar las implicancias prácticas de las normativas NIIF S1 y NIIF S2, representando un cambio de paradigma en la contabilidad empresarial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Finanzas y Contabilidad</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Comprensión total de que los riesgos climáticos (físicos como El Niño, o de transición regulatoria) erosionan irremediablemente el valor intrínseco de los activos de la empresa.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Alineación Técnico-Financiera</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Conectar al personal de geología/minas con auditores: demostrar cómo las infracciones ambientales incrementan el costo de capital y alejan a los inversionistas institucionales (NIIF S2).</p>
              </div>
            </div>
          </div>
        ) 
      },
      { 
        id: 4, 
        shortTitle: "Canal 4", 
        title: "Políticas Matrices y Reporte", 
        fullTitle: "Políticas Matrices de Gestión y Flujos de Reporte Directo al directorio general", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              Un flujo de comunicación <strong>estructuralmente ascendente hacia la Alta Dirección y el Directorio</strong>. Se activa mediante informes anuales donde auditores y gerentes de sostenibilidad evalúan la política ambiental y presentan hallazgos directamente, sin filtros de la gerencia media.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Cultura de Rendición de Cuentas</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">El Directorio evalúa el cierre de brechas de la matriz de gestión ESG y cuestiona directamente a los gerentes de línea, asegurando que las controversias se diseccionen al más alto nivel.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Eficiencia como Dogma</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Las decisiones derivadas de este escrutinio permean hacia todos los niveles jerárquicos como un mandato irrefutable, instaurando la eficiencia ambiental como dogma corporativo innegociable.</p>
              </div>
            </div>
          </div>
        ) 
      }
    ]
  },
  rscContent: {
    title: "Importancia de la Responsabilidad Social Empresarial (RSE)",
    intro: "La Responsabilidad Social Corporativa no es solo un compromiso ético, sino una estrategia fundamental para el desarrollo sostenible de nuestra organización. A través de la RSC, generamos valor compartido: protegemos el medio ambiente, promovemos el bienestar de las comunidades locales y garantizamos la viabilidad de nuestras operaciones mineras a largo plazo. Integrar prácticas sostenibles nos permite mitigar riesgos, optimizar recursos y fortalecer la confianza con todos nuestros grupos de interés.",
    modules: [
      {
        id: 1,
        title: "Transparencia Radical de Riesgos y la Adopción Obligatoria de las Normas Internacionales NIIF S1 y S2",
        description: "La implementación de las normas NIIF S1 y S2 establece un marco integral para la divulgación de riesgos de sostenibilidad y cambio climático.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">🎯 Marco Normativo Histórico</p>
              <p className="text-slate-700">El 18 de marzo de 2026, el Consejo Normativo de Contabilidad (CNC) de Perú aprobó oficialmente las normas NIIF S1 y NIIF S2, convergiendo con estándares globales emitidos por el Consejo de Normas Internacionales de Sostenibilidad (ISSB).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#002855] mb-3 flex items-center gap-2">
                  <span className="text-xl">🏦`</span> NIIF S1
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">Asuntos de sostenibilidad materiales inherentes al modelo de negocio e impacto en flujos de efectivo presentes y proyectados.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#002855] mb-3 flex items-center gap-2">
                  <span className="text-xl">🌡️</span> NIIF S2
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">Riesgos climáticos físicos y de transición que afectan la viabilidad a largo plazo de la estrategia corporativa.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#002855]">⚠️ Prevención del Greenwashing</h4>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">S</span>
                  <p className="text-slate-700"><strong>Revelación Estandarizada:</strong> Información homogénea y comparable que permite análisis real del desempeño ambiental.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">S</span>
                  <p className="text-slate-700"><strong>Castigo Normativo:</strong> Sanciones severas por incumplimiento o fraude en reportes de sostenibilidad.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">S</span>
                  <p className="text-slate-700"><strong>Decisiones Fundadas:</strong> Inversionistas disponen de información para asignación eficiente de capital.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> La adopción obligatoria de NIIF S1 y S2 cierra el vacío histórico entre el desempeño ambiental real y la información financiera reportada, permitiendo una transición ordenada hacia neutralidad climática e inversión responsable.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: "Exactitud Forense en el Reconocimiento Contable de Provisiones y Pasivos Contingentes (Enfoque NIC 37)",
        description: "La precisión en la valorización de provisiones bajo NIC 37 asegura que todos los pasivos potenciales sean contabilizados con exactitud científica.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">🏦 Enfoque Forense: De la Etapa Inicial al Post-Cierre</p>
              <p className="text-slate-700 text-sm">La verdadera RSE implica contabilizar desde el primer día de operación el ciclo completo de vida del activo minero: prospección, explotación, remediación y cierre perpetuo.</p>
            </div>

            <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
              <h4 className="font-bold text-[#002855] mb-4">🏦9 Componentes Clave de Provisiones (NIC 37):</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Cierre de Instalaciones</p>
                  <p className="text-xs text-slate-700">Desmantelamiento, estabilización y sellado permanente de operaciones mineras.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Remediación de Tierras</p>
                  <p className="text-xs text-slate-700">Recuperación y restauración ecológica de zonas impactadas por actividad extractiva.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Tratamiento de Efluentes</p>
                  <p className="text-xs text-slate-700">Gestión perpetua de drenaje ácido y aguas residuales post-cierre.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Monitoreo Ambiental</p>
                  <p className="text-xs text-slate-700">Vigilancia a largo plazo de calidad de suelos, aguas y ecosistemas.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#002855]">a"️ Metodología Rigurosa de Cálculo</h4>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">1</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Estimación Técnica ptima</p>
                  <p className="text-sm text-slate-600">Costos de ingeniería civil, movimiento de tierras, tratamiento químico basados en data histórica y estándares internacionales.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">2</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Tasa de Descuento Rigurosa</p>
                  <p className="text-sm text-slate-600">Refleja el costo de oportunidad del dinero, riesgos específicos, inflacionarios y cambiarios inherentes.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">3</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Valor Presente Contabilizado</p>
                  <p className="text-sm text-slate-600">Pasivos descontados matemáticamente para reflejar el costo real actual de obligaciones futuras.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <p className="font-bold text-[#002855] mb-2">⚠️ Riesgo de Contabilidad Miope</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Subestimar el costo de neutralización (ej. drenaje ácido a perpetuidad) infla artificialmente las utilidades presentes pero sacrifica irreparablemente la solvencia futura y expone a la corporación a litigios, multas OEFA y quiebra técnica.
              </p>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> Una contabilidad técnica, conservadora y precisa bajo NIC 37 blinda el patrimonio corporativo, garantiza equidad intergeneracional y reduce sorpresas regulatorias adversas.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 3,
        title: "Reducción Matemática del Costo Promedio Ponderado de Capital (WACC) y Atracción de Financiamiento",
        description: "La implementación de prácticas RSC reduce el WACC al disminuir el riesgo percibido, generando un menor costo de capital.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">🏦 Materialidad Financiera del Riesgo ESG</p>
              <p className="text-slate-700 text-sm">Los billones de dólares gestionados por inversionistas institucionales globales, fondos soberanos de pensiones y banca multilateral exigen métricas ESG auditadas como precondición para cualquier Due Diligence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-[#002855] mb-3">🏦 WACC Reducido</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Menor riesgo crediticio</strong></p>
                  <p className="text-slate-600">Mejores ratings de deuda corporativa</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-[#002855] mb-3">🎯 VPN Incrementado</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Mayor viabilidad</strong></p>
                  <p className="text-slate-600">Proyectos de inversión financieramente atractivos</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h4 className="font-bold text-[#002855] mb-3">💎 Capital Fresco</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Tasas competitivas</strong></p>
                  <p className="text-slate-600">Acceso a financiamiento innovador y subsidiado</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#002855]">🏦 Instrumentos de Financiamiento Innovadores</h4>
              
              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">🟢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">Líneas de Crédito de Transición Climática</p>
                    <p className="text-sm text-slate-700">Tasas de interés preferenciales para proyectos de descarbonización y adaptación climática.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">🟢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">Bonos Verdes (Green Bonds)</p>
                    <p className="text-sm text-slate-700">Emisión etiquetada para financiar proyectos ambientales con demanda global creciente.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">🟢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">Sustainability-Linked Bonds</p>
                    <p className="text-sm text-slate-700">Tasas indexadas a cumplimiento de metas ESG predefinidas, incentivando desempeño sostenible.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#002855] to-[#1a3a6a] text-white p-8 rounded-xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">♻️</span> El Círculo Virtuoso de la Sostenibilidad
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div className="text-center">
                  <p className="font-bold mb-1">Menores Costos</p>
                  <p>WACC reducido</p>
                </div>
                <div className="text-lg"> </div>
                <div className="text-center">
                  <p className="font-bold mb-1">Reinversión</p>
                  <p>Tecnologías limpias</p>
                </div>
                <div className="text-lg"> </div>
                <div className="text-center">
                  <p className="font-bold mb-1">Mejora ESG</p>
                  <p>Indicadores superiores</p>
                </div>
                <div className="text-lg"> </div>
                <div className="text-center">
                  <p className="font-bold mb-1">Más Capital</p>
                  <p>Acceso global</p>
                </div>
              </div>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> El impacto de la RSE en calidad financiera es medible y directo: reducción del WACC incrementa VPN, mejora márgenes operativos y retorno sobre inversión, atrayendo capital institucional global.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 4,
        title: "Preservación Estratégica de la Continuidad Operativa y Gestión Integral de Crisis Corporativas",
        description: "La gestión proactiva de crisis mediante RSC garantiza la continuidad operativa ante eventos adversos.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">⚡ La Información Financiera Refleja la Operación</p>
              <p className="text-slate-700 text-sm">Los números en estados financieros son la proyección numérica del desempeño operativo subyacente. Nada destruye proyecciones financieras más rápido que interrupciones operativas imprevistas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
                <h4 className="font-bold text-red-700 mb-3">⚠️ Riesgo Supremo</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">⬢ Bloqueos de acceso logístico</p>
                  <p className="text-slate-700">⬢ Paros laborales y conflictividad social</p>
                  <p className="text-slate-700">⬢ Pérdida de licencia social</p>
                  <p className="text-slate-700">⬢ Interrupción inmediata de generación de caja</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
                <h4 className="font-bold text-green-700 mb-3">✅ Respuesta RSC</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">⬢ Plataformas de diálogo preventivo</p>
                  <p className="text-slate-700">⬢ Gestión transparente de recursos críticos</p>
                  <p className="text-slate-700">⬢ Inversión en relaciones comunitarias</p>
                  <p className="text-slate-700">⬢ Mantención de licencia social</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#002855]">🛡️ Cinco Pilares de Resiliencia Operativa</h4>
              
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                <span className="text-3xl font-bold text-blue-500 flex-shrink-0">1</span>
                <div>
                  <p className="font-bold text-[#002855]">Identificación Temprana de Riesgos Sistémicos</p>
                  <p className="text-sm text-slate-700">Mapeo prospectivo de amenazas ambientales, regulatorias y comunitarias.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-purple-500">
                <span className="text-3xl font-bold text-purple-500 flex-shrink-0">2</span>
                <div>
                  <p className="font-bold text-[#002855]">Diversificación de Cadenas de Suministro</p>
                  <p className="text-sm text-slate-700">Redundancia logística para mitigar interrupciones puntuales.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-yellow-500">
                <span className="text-3xl font-bold text-yellow-500 flex-shrink-0">3</span>
                <div>
                  <p className="font-bold text-[#002855]">Protocolos de Crisis Pre-Establecidos</p>
                  <p className="text-sm text-slate-700">Procedimientos documentados para respuesta inmediata ante eventos adversos.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-green-500">
                <span className="text-3xl font-bold text-green-500 flex-shrink-0">4</span>
                <div>
                  <p className="font-bold text-[#002855]">Relaciones Fortalecidas con Comunidades</p>
                  <p className="text-sm text-slate-700">Diálogo permanente con autoridades locales y grupos de interés.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-500">
                <span className="text-3xl font-bold text-indigo-500 flex-shrink-0">5</span>
                <div>
                  <p className="font-bold text-[#002855]">Cobertura de Seguros Integral</p>
                  <p className="text-sm text-slate-700">Protección contra eventos ambientales, sociales y operativos catastróficos.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#002855]/10 to-[#EAAA00]/10 border border-[#002855]/20 p-6 rounded-xl">
              <h4 className="font-bold text-[#002855] mb-4">🏦` Beneficios Financieros de la Resiliencia</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-2">
                  <span className="text-lg">S</span>
                  <p className="text-sm text-slate-700"><strong>Menor volatilidad:</strong> Flujos de caja predecibles y estables</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">S</span>
                  <p className="text-sm text-slate-700"><strong>Protección patrimonial:</strong> Mitigación de pérdidas por lucro cesante</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">S</span>
                  <p className="text-sm text-slate-700"><strong>Viabilidad a largo plazo:</strong> Operaciones sostenibles en tiempo</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">S</span>
                  <p className="text-sm text-slate-700"><strong>Proyecciones fiables:</strong> Inversionistas pueden modelar con confianza</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="font-bold text-[#002855] mb-3">🎯 Caso de Estudio: Lecciones de Julcani y Orcopampa</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Los bloqueos logísticos en unidades mineras de Buenaventura ejemplifican cómo el rechazo comunitario genera inestabilidad política, operativa y financiera inmediata. La materialización de conflictividad social causa evaporación catastrófica de generación de caja, demostrando que la RSE no es un costo sino una inversión en seguro operativo.
              </p>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> La RSE actuá como la cobertura de seguros corporativa más robusta, económica y efectiva contra interrupciones operativas, garantizando continuidad de flujos de ingresos y predicción confiable para inversionistas a largo plazo.
              </p>
            </div>
          </div>
        )
      }
    ]
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState('cover');
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeProposalId, setActiveProposalId] = useState(null);
  const [activeChannelId, setActiveChannelId] = useState(null);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState(null);
  const [activeEvolutivoSection, setActiveEvolutivoSection] = useState(null);
  const [activeEvolutivoDetail, setActiveEvolutivoDetail] = useState(null);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [activeVariationAccount, setActiveVariationAccount] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToModules = () => {
    setShowImage(false);
    setActiveSubCategoryId(null);
    setCurrentView('modules');
  };
  
  const goToAnalisisEvolutivo = () => {
    setShowImage(false);
    setActiveSubCategoryId(null);
    setActiveEvolutivoSection(null);
    setActiveEvolutivoDetail(null);
    setShowAnalysisModal(false);
    setActiveVariationAccount(null);
    setCurrentView('analisis_evolutivo');
  };
  
  const goToCover = () => {
    setActiveModuleId(null);
    setActiveProposalId(null);
    setActiveChannelId(null);
    setActiveSubCategoryId(null);
    setActiveEvolutivoSection(null);
    setActiveEvolutivoDetail(null);
    setShowAnalysisModal(false);
    setShowImage(false);
    setCurrentView('cover');
  };
  
  const goToRSC = () => setCurrentView('rsc');
  const goToChannels = () => setCurrentView('channels');
  
  const handleSelectModule = (moduleId) => {
    setActiveModuleId(moduleId);
    setActiveSubCategoryId(null);
    setCurrentView('module-detail');
  };

  const handleSelectProposal = (proposalId) => {
    setActiveProposalId(proposalId);
    setShowImage(activeModuleId === 1);
    setCurrentView('proposal-detail');
  };

  const handleSelectChannel = (channelId) => {
    setActiveChannelId(channelId);
    setCurrentView('channel-detail');
  };

  const activeModule = reportData.modules.find(m => m.id === activeModuleId);
  const activeProposal = activeModule?.proposals.find(p => p.id === activeProposalId);
  const activeChannel = reportData.channels.items.find(c => c.id === activeChannelId);

  // 1. Vista Portada
  if (currentView === 'cover') {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        <div className="bg-white w-full max-w-5xl py-24 md:py-32 px-8 rounded-[2.5rem] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center relative overflow-hidden">
          
          {/* Detalle curvo amarillo en la esquina superior izquierda */}
          <div className="absolute top-0 left-0 w-[60%] md:w-[45%] h-6 md:h-10 bg-[#d49900] rounded-br-[100px]"></div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111827] mb-12 text-center max-w-4xl leading-tight tracking-tight">
            Compañía de Minas Buenaventura<br />S.A.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={goToModules} 
              className="bg-[#031024] hover:bg-[#0a1e40] text-white py-4 px-10 rounded-full text-xl md:text-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Gestión Ambiental
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>

            <button 
              onClick={goToAnalisisEvolutivo} 
              className="bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] py-4 px-10 rounded-full text-xl md:text-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Análisis Evolutivo
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Vista de Módulos
  if (currentView === 'modules') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-6xl flex flex-col gap-10 mt-4 md:mt-10 relative">
          <div className="bg-white rounded-2xl py-8 px-6 text-center shadow-lg border-t-4 border-[#EAAA00]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002855] uppercase tracking-wide">
              {reportData.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reportData.modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => handleSelectModule(mod.id)}
                className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                  {mod.title}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={goToRSC}
            className="w-full mt-2 bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] rounded-3xl py-8 px-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col items-center justify-center gap-2"
          >
            <span className="text-2xl font-bold uppercase tracking-wide">Importancia de la RSE</span>
          </button>
        </div>
        <button 
          onClick={goToCover} 
          className="mt-16 text-[#002855] font-medium hover:text-[#EAAA00] transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Volver a la portada
        </button>
      </div>
    );
  }

  // 3. Vista Detalle del Módulo
  if (currentView === 'module-detail' && activeModule) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-6xl flex flex-col gap-8 mt-4 md:mt-8">
          <div className="flex justify-end">
            {activeModule.subCategories && activeSubCategoryId ? (
              <button 
                onClick={() => setActiveSubCategoryId(null)}
                className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver a {activeModule.title}
              </button>
            ) : (
              <button 
                onClick={goToModules}
                className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver a Módulos
              </button>
            )}
          </div>

          <div className="bg-[#002855] rounded-3xl py-10 px-6 text-center shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#EAAA00]"></div>
            <h2 className="text-2xl md:text-3xl text-white font-bold tracking-wider">
              {activeModule.subCategories && activeSubCategoryId 
                ? activeModule.subCategories.find(s => s.id === activeSubCategoryId).title 
                : activeModule.title}
            </h2>
          </div>

          {activeModule.subCategories && !activeSubCategoryId ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {activeModule.subCategories.map((subCat) => (
                <button
                  key={subCat.id}
                  onClick={() => setActiveSubCategoryId(subCat.id)}
                  className="group relative bg-white rounded-3xl p-8 md:p-12 text-center shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-[#EAAA00] hover:border-[#002855] hover:-translate-y-2 flex items-center justify-center min-h-[220px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#EAAA00]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-bold text-[#002855] leading-relaxed">
                    {subCat.title}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {activeModule.proposals
                .filter(prop => !activeModule.subCategories || prop.subCategoryId === activeSubCategoryId)
                .map((prop) => (
                <button
                  key={prop.id}
                  onClick={() => handleSelectProposal(prop.id)}
                  className="group bg-white rounded-3xl py-8 px-6 md:px-10 text-center shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#EAAA00] hover:-translate-y-1 flex items-center justify-center min-h-[160px]"
                >
                  <span className="text-base md:text-lg font-medium text-slate-700 group-hover:text-[#002855] transition-colors leading-relaxed">
                    {prop.title}
                  </span>
                </button>
              ))}

              {/* CAJN EXTRA PARA "CANALES DE COMUNICACIN" (Solo en Módulo 2) */}
              {activeModule.id === 2 && (
                <button
                  onClick={goToChannels}
                  className="md:col-span-2 bg-[#EAAA00] hover:bg-[#d49900] rounded-3xl py-10 px-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center mt-2"
                >
                  <span className="text-xl md:text-2xl font-bold text-[#002855] uppercase tracking-wide">
                    Canales de Comunicación
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 4. Vista Detalle de Propuesta
  if (currentView === 'proposal-detail' && activeModule && activeProposal) {
    return (
      <>
      {/* Modal de Imagen a Pantalla Completa - fuera de todos los contenedores */}
      {isFullscreen && activeProposal?.imageUrl && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(4px)' }}
          onClick={() => setIsFullscreen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-10"
            onClick={() => setIsFullscreen(false)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <img 
            src={activeProposal.imageUrl} 
            alt={activeProposal.title}
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-7xl flex flex-col gap-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-end">
            <button 
              onClick={() => setCurrentView('module-detail')}
              className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Volver al Módulo
            </button>
            <div className="bg-white rounded-xl py-3 px-8 flex items-center shadow-sm border border-slate-100 flex-1 md:flex-none justify-center">
              <h2 className="text-lg font-medium text-slate-700 text-center">
                {activeModule.subCategories && activeProposal.subCategoryId
                  ? activeModule.subCategories.find(s => s.id === activeProposal.subCategoryId).title
                  : activeModule.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 items-stretch">
            <div className="w-full lg:w-1/3 bg-[#002855] rounded-3xl p-8 lg:p-10 flex flex-col items-start justify-center shadow-xl relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#EAAA00]/10 rounded-full blur-2xl"></div>

               <h3 className="text-left text-xl font-bold text-[#EAAA00] uppercase tracking-wider mb-4 relative z-10">
                 {activeProposal.shortTitle || activeProposal.title}
               </h3>
               <p className="text-left text-lg md:text-2xl text-white font-light leading-snug relative z-10">
                 {activeProposal.fullTitle}
               </p>
            </div>

            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col relative border border-slate-100 min-h-[400px]">
              {showImage ? (
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-full min-h-[300px] bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 relative overflow-hidden group p-4">
                     {activeProposal.imageUrl ? (
                       <div 
                         className="w-full h-full cursor-pointer relative group/img overflow-hidden rounded-xl"
                         onClick={() => setIsFullscreen(true)}
                       >
                         <OptimizedImage 
                           src={activeProposal.imageUrl} 
                           alt={activeProposal.title} 
                           className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-105 group-hover/img:opacity-90" 
                         />
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                           <div className="bg-white/90 p-3 rounded-full text-[#002855] translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300 shadow-lg">
                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                           </div>
                         </div>
                       </div>
                     ) : (
                       <>
                         <svg className="w-16 h-16 text-slate-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         <span className="absolute bottom-4 text-slate-500 font-medium">Área para Imagen</span>
                       </>
                     )}
                  </div>
                  <p className="mt-6 text-slate-600 text-center italic mb-6">
                    Representación visual de: {activeProposal.title}
                  </p>
                  <button 
                    onClick={() => setShowImage(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-[#002855] py-2 px-6 rounded-lg font-medium transition-colors flex items-center gap-2 border border-slate-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                    Volver al desarrollo textual
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#002855] mb-8 border-b-2 border-slate-100 pb-4 w-full">
                    {activeModule.id === 4 ? "Objetivo del acuerdo" : 
                    activeModule.subCategories && activeProposal.subCategoryId === 'incentivos' ? "Desarrollo del incentivo" :
                    activeModule.subCategories && activeProposal.subCategoryId === 'sanciones' ? "Desarrollo de la sanción" :
                    "Desarrollo de la propuesta"}
                  </h2>
                  <div className="flex-1 flex flex-col items-start text-lg md:text-xl text-slate-600 leading-relaxed w-full">
                    {activeProposal.content}
                    
                    {activeProposal.imageUrl && (
                      <div className="mt-10 w-full flex justify-center">
                        <button
                          onClick={() => setShowImage(true)}
                          className="bg-[#002855] hover:bg-[#0a1e40] text-white py-4 px-10 rounded-2xl text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                          {activeModule.subCategories && activeProposal.subCategoryId === 'incentivos' ? "Ver imagen del incentivo" :
                           activeModule.subCategories && activeProposal.subCategoryId === 'sanciones' ? "Ver imagen de la sanción" :
                           "Ver imagen de la propuesta"}
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className="mt-12 flex justify-end w-full">
                <button 
                  onClick={goToCover}
                  className="bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] font-bold py-3 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Finalizar y volver al inicio
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  // 5. Vista General de Canales de Comunicación
  if (currentView === 'channels') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-6xl flex flex-col gap-8 mt-4 md:mt-8">
          <div className="flex justify-end">
            <button 
              onClick={() => setCurrentView('module-detail')}
              className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Volver a Propuesta de mejora
            </button>
          </div>

          <div className="bg-[#EAAA00] rounded-3xl py-10 px-6 text-center shadow-xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl text-[#002855] font-bold tracking-wider uppercase">
              {reportData.channels.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {reportData.channels.items.map((channel) => (
              <button
                key={channel.id}
                onClick={() => handleSelectChannel(channel.id)}
                className="group bg-white rounded-3xl py-12 px-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#002855] hover:-translate-y-1"
              >
                <span className="text-xl font-medium text-slate-700 group-hover:text-[#002855] transition-colors">
                  {channel.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 6. Vista Detalle de un Canal
  if (currentView === 'channel-detail' && activeChannel) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-7xl flex flex-col gap-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-end">
            <button 
              onClick={goToChannels}
              className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Volver a Canales
            </button>
            <div className="bg-white rounded-xl py-3 px-8 flex items-center shadow-sm border border-slate-100 flex-1 md:flex-none justify-center">
              <h2 className="text-lg font-medium text-slate-700">
                {reportData.channels.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-2 items-stretch">
            <div className="w-full lg:w-1/3 bg-[#002855] rounded-3xl p-8 lg:p-10 flex flex-col items-start justify-center shadow-xl relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#EAAA00]/10 rounded-full blur-2xl"></div>

               <h3 className="text-left text-xl font-bold text-[#EAAA00] uppercase tracking-wider mb-4 relative z-10">
                 {activeChannel.title}
               </h3>
               <p className="text-left text-lg md:text-2xl text-white font-light leading-snug relative z-10">
                 {activeChannel.fullTitle}
               </p>
            </div>

            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col relative border border-slate-100 min-h-[400px]">
              <h2 className="text-2xl font-bold text-[#002855] mb-8 border-b-2 border-slate-100 pb-4">
                Descripción del canal
              </h2>
              <div className="flex-1 flex flex-col items-start text-lg md:text-xl text-slate-600 leading-relaxed w-full">
                {activeChannel.content}
                
                {activeChannel.hasDashboard && (
                  <div className="mt-10 w-full flex justify-center">
                    <button
                      onClick={() => setCurrentView('dashboard-view')}
                      className="bg-[#002855] hover:bg-[#0a1e40] text-white py-4 px-10 rounded-2xl text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 animate-pulse hover:animate-none"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      Lanzar Dashboard
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={goToCover}
                  className="bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] font-bold py-3 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Finalizar y volver al inicio
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. Vista de Importancia de la RSE
  if (currentView === 'rsc') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-6xl flex flex-col gap-8">
          
          {/* Encabezado */}
          <div className="text-center py-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002855] leading-tight">
              {reportData.rscContent.title}
            </h2>
          </div>

          {/* Grid de Módulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportData.rscContent.modules.map((module) => (
              <div 
                key={module.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 overflow-hidden hover:border-[#EAAA00] group cursor-pointer"
                onClick={() => setActiveModuleId(module.id)}
              >
                <div className="h-2 bg-[#EAAA00] group-hover:bg-[#d49900] transition-all"></div>
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#EAAA00]/10 p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6 text-[#002855]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#002855] mb-2 leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 font-medium">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-4 mt-2">
                    <div className="text-sm text-slate-500 line-clamp-3">
                      {typeof module.content === 'string' ? module.content : "Haz clic para ver detalles completos"}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#EAAA00] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Ver más detalles</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vista de Detalle del Módulo */}
          {activeModuleId && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#002855] flex-1">
                  {reportData.rscContent.modules.find(m => m.id === activeModuleId)?.title}
                </h3>
                <button
                  onClick={() => setActiveModuleId(null)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-all"
                >
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                {typeof reportData.rscContent.modules.find(m => m.id === activeModuleId)?.content === 'string' ? (
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    {reportData.rscContent.modules.find(m => m.id === activeModuleId)?.content}
                  </p>
                ) : (
                  <div>
                    {reportData.rscContent.modules.find(m => m.id === activeModuleId)?.content}
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setActiveModuleId(Math.max(1, activeModuleId - 1))}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  disabled={activeModuleId === 1}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  Anterior
                </button>
                <button
                  onClick={() => setActiveModuleId(Math.min(4, activeModuleId + 1))}
                  className="flex-1 bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  disabled={activeModuleId === 4}
                >
                  Siguiente
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>
            </div>
          )}

          {/* Botón de Regreso */}
          <button 
            onClick={goToCover}
            className="bg-[#EAAA00] hover:bg-[#d49900] text-[#002855] py-4 px-10 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 self-center"
          >
            Volver a la portada
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </button>
        </div>
      </div>
    );
  }

  // 8. Vista del Dashboard Interactivo
  if (currentView === 'dashboard-view') {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-7xl flex flex-col gap-6 mt-4">
          
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002855] flex items-center gap-3">
              <svg className="w-8 h-8 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              Sala de Control ERP
            </h2>
            <button 
              onClick={() => setCurrentView('channel-detail')}
              className="bg-white border border-slate-200 text-[#002855] rounded-xl py-2 px-6 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Cerrar Dashboard
            </button>
          </div>

          {/* Embedded Dashboard */}
          <div className="w-full bg-white rounded-3xl shadow-2xl relative overflow-hidden border border-slate-200" style={{ height: '85vh' }}>
             <iframe src="/dashboard.html" title="Dashboard Ambiental" className="w-full h-full border-0"></iframe>
          </div>

        </div>
      </div>
    );
  }

  // 9. Vista de Análisis Evolutivo
  if (currentView === 'analisis_evolutivo') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        
        {/* Modal for Partial Analysis */}
        {showAnalysisModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl border-t-4 border-[#002855] max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#002855] uppercase">Análisis Vertical Parcial</h3>
                  <p className="font-bold text-[#002855] text-lg">COMPAÑÍA DE MINAS BUENAVENTURA S.A.A.</p>
                </div>
                <button 
                  onClick={() => { setShowAnalysisModal(false); setActiveVariationAccount(null); }}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              
              {activeVariationAccount ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-3 rounded-t-xl border-b-2 border-slate-300">
                    <h4 className="font-bold text-sm md:text-base uppercase tracking-wider">
                      Explicación de Variación: {activeVariationAccount.cuenta}
                    </h4>
                  </div>
                  <div className="bg-white p-8 border-x border-b border-slate-200 rounded-b-xl text-slate-700 text-lg leading-relaxed">
                    <p>
                      {activeVariationAccount.explicacion || `Aquí podrás detallar los motivos, justificaciones o factores que impulsaron la variación observada en la cuenta de ${activeVariationAccount.cuenta}.`}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-3 rounded-t-xl border-b-2 border-slate-300">
                    <h4 className="font-bold text-sm md:text-base">
                      {activeEvolutivoDetail === 'Composición de patrimonio' 
                        ? "DESGLOSE DE PATRIMONIO (% sobre Total Patrimonio)" 
                        : "DESGLOSE DE PASIVOS (% sobre Total Pasivos)"}
                    </h4>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-[#c8e2eb] text-[#002855] text-sm md:text-base border-b border-slate-300">
                        <th className="py-2 px-4 font-bold">Cuenta</th>
                        <th className="py-2 px-4 font-bold text-center">2025</th>
                        <th className="py-2 px-4 font-bold text-center">% Parcial</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 text-sm">
                      {activeEvolutivoDetail === 'Composición de patrimonio' ? (
                        <>
                          <tr><td colSpan="3" className="py-2 px-4 font-bold text-[#002855]">Patrimonio</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Capital Emitido</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">750,497</td><td className="py-1 px-4 text-center font-mono">18.48%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Primas de Emisión</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">218,450</td><td className="py-1 px-4 text-center font-mono">5.38%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Acciones de Inversión</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">791</td><td className="py-1 px-4 text-center font-mono">0.02%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Otras Reservas de Capital</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">195,441</td><td className="py-1 px-4 text-center font-mono">4.81%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Resultados Acumulados</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">2,896,807</td><td className="py-1 px-4 text-center font-mono">71.32%</td></tr>
                          <tr className="border-b border-slate-200"><td className="py-1 px-4 pl-8">Otras Reservas de Patrimonio</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">-96</td><td className="py-1 px-4 text-center font-mono">0.00%</td></tr>
                          
                          <tr className="font-bold text-base bg-slate-100 border-t-2 border-[#002855]"><td className="py-3 px-4 text-[#002855]">Total Patrimonio</td><td className="py-3 px-4 text-center font-mono text-[#22c55e]">4,061,890</td><td className="py-3 px-4 text-center font-mono font-bold">100.00%</td></tr>
                        </>
                      ) : (
                        <>
                          <tr><td colSpan="3" className="py-2 px-4 font-bold text-[#002855]">Pasivos Corrientes</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Otros Pasivos Financieros</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">5,749</td><td className="py-1 px-4 text-center font-mono">0.47%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Cuentas por Pagar Comerciales y Otras CxP</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">264,138</td><td className="py-1 px-4 text-center font-mono">21.53%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-12">Cuentas por Pagar Comerciales</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">209,307</td><td className="py-1 px-4 text-center font-mono">17.06%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-12">Cuentas por Pagar a Entidades Relacionadas</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">9,406</td><td className="py-1 px-4 text-center font-mono">0.77%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-12">Otras Cuentas por Pagar</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">45,425</td><td className="py-1 px-4 text-center font-mono">3.70%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Provisión por Beneficios a los Empleados</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">16,960</td><td className="py-1 px-4 text-center font-mono">1.38%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Otras Provisiones</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">41,430</td><td className="py-1 px-4 text-center font-mono">3.38%</td></tr>
                          <tr className="border-b border-slate-200"><td className="py-1 px-4 pl-8">Pasivos por Impuestos a las Ganancias</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">21,364</td><td className="py-1 px-4 text-center font-mono">1.74%</td></tr>
                          <tr className="border-b-2 border-slate-300 font-bold bg-slate-50"><td className="py-2 px-4">Total Pasivos Corrientes</td><td className="py-2 px-4 text-center font-mono text-[#22c55e]">349,641</td><td className="py-2 px-4 text-center font-mono font-bold">28.49%</td></tr>
  
                          <tr><td colSpan="3" className="py-2 px-4 font-bold text-[#002855] pt-4">Pasivos No Corrientes</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Otros Pasivos Financieros</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">676,569</td><td className="py-1 px-4 text-center font-mono">55.14%</td></tr>
                          <tr className="border-b border-slate-100"><td className="py-1 px-4 pl-8">Provisión por Beneficios a los Empleados</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">32,648</td><td className="py-1 px-4 text-center font-mono">2.66%</td></tr>
                          <tr className="border-b border-slate-200"><td className="py-1 px-4 pl-8">Otras Provisiones</td><td className="py-1 px-4 text-center font-mono text-[#22c55e]">168,230</td><td className="py-1 px-4 text-center font-mono">13.71%</td></tr>
                          <tr className="border-b-2 border-[#002855] font-bold bg-slate-50"><td className="py-2 px-4">Total Pasivos No Corrientes</td><td className="py-2 px-4 text-center font-mono text-[#22c55e]">877,447</td><td className="py-2 px-4 text-center font-mono font-bold">71.51%</td></tr>
  
                          <tr className="font-bold text-base bg-slate-100 border-t-2 border-[#002855]"><td className="py-3 px-4 uppercase text-[#002855]">Total Pasivos</td><td className="py-3 px-4 text-center font-mono text-[#22c55e]">1,227,088</td><td className="py-3 px-4 text-center font-mono font-bold">100.00%</td></tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}


              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => { setShowAnalysisModal(false); setActiveVariationAccount(null); }}
                  className="bg-[#002855] text-white px-6 py-2 rounded-lg hover:bg-[#0a1e40] transition-colors font-medium"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="w-full max-w-6xl flex flex-col gap-10 mt-4 md:mt-10 relative">
          
          <div className="flex justify-end">
            {activeEvolutivoDetail ? (
              <button 
                onClick={() => setActiveEvolutivoDetail(null)}
                className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver a {activeEvolutivoSection}
              </button>
            ) : activeEvolutivoSection ? (
              <button 
                onClick={() => setActiveEvolutivoSection(null)}
                className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Volver a Análisis Evolutivo
              </button>
            ) : null}
          </div>

          <div className="bg-white rounded-2xl py-8 px-6 text-center shadow-lg border-t-4 border-[#EAAA00]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002855] uppercase tracking-wide">
              {activeEvolutivoDetail ? activeEvolutivoDetail : (activeEvolutivoSection ? activeEvolutivoSection : "Análisis Evolutivo")}
            </h2>
          </div>
          
          {activeEvolutivoDetail ? (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 flex flex-col items-center justify-center min-h-[300px]">
              {activeEvolutivoDetail === 'Composición de activos' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">% Vertical</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="bg-slate-50"><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] text-lg">Activos</td></tr>
                        
                        <tr><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] pl-10 text-md bg-slate-50/50">Activos Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Efectivo y Equivalentes al Efectivo</td><td className="py-2 px-6 text-right font-mono">243,698</td><td className="py-2 px-6 text-right font-mono">4.61%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Cobrar Comerciales</td><td className="py-2 px-6 text-right font-mono">292,619</td><td className="py-2 px-6 text-right font-mono">5.53%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Cobrar a Entidades Relacionadas</td><td className="py-2 px-6 text-right font-mono">4,005</td><td className="py-2 px-6 text-right font-mono">0.08%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Cuentas por Cobrar</td><td className="py-2 px-6 text-right font-mono">53,585</td><td className="py-2 px-6 text-right font-mono">1.01%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Inventarios</td><td className="py-2 px-6 text-right font-mono">42,862</td><td className="py-2 px-6 text-right font-mono">0.81%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Activos no Financieros</td><td className="py-2 px-6 text-right font-mono">4,322</td><td className="py-2 px-6 text-right font-mono">0.08%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Activos Corrientes</td><td className="py-3 px-6 text-right font-mono">641,091</td><td className="py-3 px-6 text-right font-mono">12.12%</td></tr>

                        <tr><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] pl-10 text-md bg-slate-50/50 pt-6">Activos No Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Inversiones en Subsidiarias, Neg. Conjuntos y Asociadas</td><td className="py-2 px-6 text-right font-mono">2,476,456</td><td className="py-2 px-6 text-right font-mono">46.82%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Cuentas por Cobrar</td><td className="py-2 px-6 text-right font-mono">588,690</td><td className="py-2 px-6 text-right font-mono">11.13%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Propiedades, Planta y Equipo</td><td className="py-2 px-6 text-right font-mono">1,474,393</td><td className="py-2 px-6 text-right font-mono">27.88%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Activos por Impuestos Diferidos</td><td className="py-2 px-6 text-right font-mono">76,602</td><td className="py-2 px-6 text-right font-mono">1.45%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Activos por Impuestos Corrientes, no Corrientes</td><td className="py-2 px-6 text-right font-mono">1,840</td><td className="py-2 px-6 text-right font-mono">0.03%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Activos no Financieros</td><td className="py-2 px-6 text-right font-mono">29,906</td><td className="py-2 px-6 text-right font-mono">0.57%</td></tr>
                        <tr className="border-b-2 border-slate-400 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Activos No Corrientes</td><td className="py-3 px-6 text-right font-mono">4,647,887</td><td className="py-3 px-6 text-right font-mono">87.88%</td></tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Total de Activos</td><td className="py-5 px-6 text-right font-mono">5,288,978</td><td className="py-5 px-6 text-right font-mono">100.00%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Composición de pasivos' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">% Vertical</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="bg-slate-50"><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] text-lg">Pasivos y Patrimonio</td></tr>
                        
                        <tr><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] pl-10 text-md bg-slate-50/50">Pasivos Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Pasivos Financieros</td><td className="py-2 px-6 text-right font-mono">5,749</td><td className="py-2 px-6 text-right font-mono">0.11%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Pagar Comerciales y Otras CxP</td><td className="py-2 px-6 text-right font-mono">264,138</td><td className="py-2 px-6 text-right font-mono">4.99%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Pagar Comerciales</td><td className="py-2 px-6 text-right font-mono">209,307</td><td className="py-2 px-6 text-right font-mono">3.96%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Pagar a Entidades Relacionadas</td><td className="py-2 px-6 text-right font-mono">9,406</td><td className="py-2 px-6 text-right font-mono">0.18%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Cuentas por Pagar</td><td className="py-2 px-6 text-right font-mono">45,425</td><td className="py-2 px-6 text-right font-mono">0.86%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Provisión por Beneficios a los Empleados</td><td className="py-2 px-6 text-right font-mono">16,960</td><td className="py-2 px-6 text-right font-mono">0.32%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Provisiones</td><td className="py-2 px-6 text-right font-mono">41,430</td><td className="py-2 px-6 text-right font-mono">0.78%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Pasivos por Impuestos a las Ganancias</td><td className="py-2 px-6 text-right font-mono">21,364</td><td className="py-2 px-6 text-right font-mono">0.40%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Pasivos Corrientes</td><td className="py-3 px-6 text-right font-mono">349,641</td><td className="py-3 px-6 text-right font-mono">6.61%</td></tr>

                        <tr><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] pl-10 text-md bg-slate-50/50 pt-6">Pasivos No Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Pasivos Financieros</td><td className="py-2 px-6 text-right font-mono">676,569</td><td className="py-2 px-6 text-right font-mono">12.79%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Provisión por Beneficios a los Empleados</td><td className="py-2 px-6 text-right font-mono">32,648</td><td className="py-2 px-6 text-right font-mono">0.62%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Provisiones</td><td className="py-2 px-6 text-right font-mono">168,230</td><td className="py-2 px-6 text-right font-mono">3.18%</td></tr>
                        <tr className="border-b-2 border-slate-400 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Pasivos No Corrientes</td><td className="py-3 px-6 text-right font-mono">877,447</td><td className="py-3 px-6 text-right font-mono">16.59%</td></tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]">
                          <td className="py-5 px-6 uppercase tracking-wider">Total Pasivos</td>
                          <td className="py-5 px-6 text-right font-mono">1,227,088</td>
                          <td 
                            className="py-5 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors"
                            onClick={() => setShowAnalysisModal(true)}
                            title="Ver análisis parcial"
                          >
                            23.20%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Composición de patrimonio' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">% Vertical</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr><td colSpan="3" className="py-3 px-6 font-bold text-[#002855] text-lg bg-slate-50">Patrimonio</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Capital Emitido</td><td className="py-2 px-6 text-right font-mono">750,497</td><td className="py-2 px-6 text-right font-mono">14.19%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Primas de Emisión</td><td className="py-2 px-6 text-right font-mono">218,450</td><td className="py-2 px-6 text-right font-mono">4.13%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Acciones de Inversión</td><td className="py-2 px-6 text-right font-mono">791</td><td className="py-2 px-6 text-right font-mono">0.01%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Otras Reservas de Capital</td><td className="py-2 px-6 text-right font-mono">195,441</td><td className="py-2 px-6 text-right font-mono">3.70%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Resultados Acumulados</td><td className="py-2 px-6 text-right font-mono">2,896,807</td><td className="py-2 px-6 text-right font-mono">54.77%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-10">Otras Reservas de Patrimonio</td><td className="py-2 px-6 text-right font-mono">-96</td><td className="py-2 px-6 text-right font-mono">0.00%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]">
                          <td className="py-3 px-6 pl-6 uppercase text-sm">Total Patrimonio</td>
                          <td className="py-3 px-6 text-right font-mono">4,061,890</td>
                          <td 
                            className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors"
                            onClick={() => setShowAnalysisModal(true)}
                            title="Ver análisis parcial"
                          >
                            76.80%
                          </td>
                        </tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Total Pasivo y Patrimonio</td><td className="py-5 px-6 text-right font-mono">5,288,978</td><td className="py-5 px-6 text-right font-mono">100.00%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Composición del estado de resultado' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Resultados</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">% Vertical</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingresos de Actividades Ordinarias</td><td className="py-2 px-6 text-right font-mono">1,005,025</td><td className="py-2 px-6 text-right font-mono">100.00%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Costo de Ventas</td><td className="py-2 px-6 text-right font-mono">-478,774</td><td className="py-2 px-6 text-right font-mono">-47.64%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-2 px-6">Ganancia (Pérdida) Bruta</td><td className="py-2 px-6 text-right font-mono">526,251</td><td className="py-2 px-6 text-right font-mono">52.36%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos de Ventas y Distribución</td><td className="py-2 px-6 text-right font-mono">-16,972</td><td className="py-2 px-6 text-right font-mono">-1.69%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos de Administración</td><td className="py-2 px-6 text-right font-mono">-53,296</td><td className="py-2 px-6 text-right font-mono">-5.30%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Ingresos Operativos</td><td className="py-2 px-6 text-right font-mono">68,490</td><td className="py-2 px-6 text-right font-mono">6.81%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Gastos Operativos</td><td className="py-2 px-6 text-right font-mono">-88,493</td><td className="py-2 px-6 text-right font-mono">-8.81%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otras Ganancias (Pérdidas)</td><td className="py-2 px-6 text-right font-mono">-1,432</td><td className="py-2 px-6 text-right font-mono">-0.14%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-2 px-6">Ganancia (Pérdida) Operativa</td><td className="py-2 px-6 text-right font-mono">434,548</td><td className="py-2 px-6 text-right font-mono">43.24%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingresos Financieros</td><td className="py-2 px-6 text-right font-mono">40,875</td><td className="py-2 px-6 text-right font-mono">4.07%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos Financieros</td><td className="py-2 px-6 text-right font-mono">-74,871</td><td className="py-2 px-6 text-right font-mono">-7.45%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Ingresos (Gastos) de Subsidiarias</td><td className="py-2 px-6 text-right font-mono">404,778</td><td className="py-2 px-6 text-right font-mono">40.28%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Diferencias de Cambio Neto</td><td className="py-2 px-6 text-right font-mono">61,783</td><td className="py-2 px-6 text-right font-mono">6.15%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-2 px-6">Ganancia (Pérdida) antes de Impuestos</td><td className="py-2 px-6 text-right font-mono">867,113</td><td className="py-2 px-6 text-right font-mono">86.28%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingreso (Gasto) por Impuesto</td><td className="py-2 px-6 text-right font-mono">-76,047</td><td className="py-2 px-6 text-right font-mono">-7.57%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-2 px-6">Ganancia (Pérdida) Neta de Op. Continuadas</td><td className="py-2 px-6 text-right font-mono">791,066</td><td className="py-2 px-6 text-right font-mono">78.71%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ganancia (Pérdida) de Op. Discontinuadas</td><td className="py-2 px-6 text-right font-mono">-8,921</td><td className="py-2 px-6 text-right font-mono">-0.89%</td></tr>
                        
                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Ganancia (Pérdida) Neta del Ejercicio</td><td className="py-5 px-6 text-right font-mono">782,145</td><td className="py-5 px-6 text-right font-mono">77.82%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Evolución de activos' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera - Análisis Horizontal</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">2024</th>
                          <th className="py-4 px-6 font-bold text-right">Var. Absoluta</th>
                          <th className="py-4 px-6 font-bold text-right">Var. %</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="bg-slate-50"><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] text-lg">Activos</td></tr>
                        
                        <tr><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] pl-10 text-md bg-slate-50/50">Activos Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Efectivo y Equivalentes al Efectivo</td><td className="py-2 px-6 text-right font-mono">243,698</td><td className="py-2 px-6 text-right font-mono">266,865</td><td className="py-2 px-6 text-right font-mono">-23,167</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Efectivo y Equivalentes al Efectivo', explicacion: 'Disminución por desembolsos en refinanciamiento de bonos (prepago 5.50% 2026 y emisión 6.80% 2032) y pagos de obligaciones tributarias.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-8.68%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Cobrar Comerciales</td><td className="py-2 px-6 text-right font-mono">292,619</td><td className="py-2 px-6 text-right font-mono">130,027</td><td className="py-2 px-6 text-right font-mono">162,592</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Cuentas por Cobrar Comerciales', explicacion: 'Aumento significativo en clientes nacionales (de US$116M a US$272M) por mayores volúmenes y precios de metales preciosos, especialmente plata. CxC sujetas a precios provisionales pasaron de US$98M a US$277M.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">125.04%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Cobrar a Entidades Relacionadas</td><td className="py-2 px-6 text-right font-mono">4,005</td><td className="py-2 px-6 text-right font-mono">1,210</td><td className="py-2 px-6 text-right font-mono">2,795</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Cuentas por Cobrar a Entidades Relacionadas', explicacion: 'Mayor saldo por transacciones con entidades relacionadas del grupo.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">230.99%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Cuentas por Cobrar</td><td className="py-2 px-6 text-right font-mono">53,585</td><td className="py-2 px-6 text-right font-mono">51,598</td><td className="py-2 px-6 text-right font-mono">1,987</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Cuentas por Cobrar (Corriente)', explicacion: 'Incremento en reclamos tributarios impugnados bajo protesto (de US$521M a US$576M) por efecto de tipo de cambio y nuevos pagos en disputa (ITAN 2020 y 2021).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">3.85%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Inventarios</td><td className="py-2 px-6 text-right font-mono">42,862</td><td className="py-2 px-6 text-right font-mono">42,440</td><td className="py-2 px-6 text-right font-mono">422</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Inventarios', explicacion: 'Variación mínima (+1%). Inventarios estables; mayor producción compensada con provisiones por desvalorización (de US$19.5M a US$22M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.99%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Activos no Financieros</td><td className="py-2 px-6 text-right font-mono">4,322</td><td className="py-2 px-6 text-right font-mono">5,406</td><td className="py-2 px-6 text-right font-mono">-1,084</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Activos no Financieros (Corriente)', explicacion: 'Menor nivel de pagos anticipados al cierre del ejercicio.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-20.05%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Activos Corrientes</td><td className="py-3 px-6 text-right font-mono">641,091</td><td className="py-3 px-6 text-right font-mono">497,546</td><td className="py-3 px-6 text-right font-mono">143,545</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Activos Corrientes', explicacion: 'Incremento impulsado por el aumento en CxC comerciales (+125%) por mayores ventas y precios.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">28.85%</td></tr>
                        
                        <tr><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] pl-10 text-md bg-slate-50/50 pt-6">Activos No Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Inversiones en Subsidiarias, Neg. Conjuntos y Asociadas</td><td className="py-2 px-6 text-right font-mono">2,476,456</td><td className="py-2 px-6 text-right font-mono">2,184,794</td><td className="py-2 px-6 text-right font-mono">291,662</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Inversiones en Subsidiarias, Neg. Conjuntos y Asociadas', explicacion: 'Crecimiento por participación en resultados de subsidiarias y asociadas (US$404.8M): Cerro Verde +US$267.6M, El Brocal +US$73.4M, Coimolache +US$42.9M, La Zanja +US$22.3M.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">13.35%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Cuentas por Cobrar</td><td className="py-2 px-6 text-right font-mono">588,690</td><td className="py-2 px-6 text-right font-mono">539,598</td><td className="py-2 px-6 text-right font-mono">49,092</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Cuentas por Cobrar (No Corriente)', explicacion: 'Mayor saldo en reclamos tributarios bajo protesto a largo plazo y efecto favorable del tipo de cambio sobre la posición activa en soles.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">9.10%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Propiedades, Planta y Equipo</td><td className="py-2 px-6 text-right font-mono">1,474,393</td><td className="py-2 px-6 text-right font-mono">1,091,000</td><td className="py-2 px-6 text-right font-mono">383,393</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Propiedades, Planta y Equipo', explicacion: 'Inversiones significativas: costos de desarrollo de mina (US$119.6M), trabajos en curso (US$233.6M) y transferencias a edificios/construcciones (US$272M). Total adiciones US$404.2M en el año.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">35.14%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Activos por Impuestos Diferidos</td><td className="py-2 px-6 text-right font-mono">76,602</td><td className="py-2 px-6 text-right font-mono">82,217</td><td className="py-2 px-6 text-right font-mono">-5,615</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Activos por Impuestos Diferidos', explicacion: 'Reversión parcial de activos por impuesto diferido conforme se realizan las diferencias temporarias.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-6.83%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Activos por Impuestos Corrientes, no Corrientes</td><td className="py-2 px-6 text-right font-mono">1,840</td><td className="py-2 px-6 text-right font-mono">1,643</td><td className="py-2 px-6 text-right font-mono">197</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Activos por Impuestos Corrientes, no Corrientes', explicacion: '' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">11.99%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Activos no Financieros</td><td className="py-2 px-6 text-right font-mono">29,906</td><td className="py-2 px-6 text-right font-mono">24,572</td><td className="py-2 px-6 text-right font-mono">5,334</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Activos no Financieros (No Corriente)', explicacion: 'Mayor saldo en otros activos no financieros.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">21.71%</td></tr>
                        <tr className="border-b-2 border-slate-400 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Activos No Corrientes</td><td className="py-3 px-6 text-right font-mono">4,647,887</td><td className="py-3 px-6 text-right font-mono">3,923,824</td><td className="py-3 px-6 text-right font-mono">724,063</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Activos No Corrientes', explicacion: 'Crecimiento impulsado por inversiones en subsidiarias (+US$292M) y PPE (+US$383M).' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">18.45%</td></tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Total de Activos</td><td className="py-5 px-6 text-right font-mono">5,288,978</td><td className="py-5 px-6 text-right font-mono">4,421,370</td><td className="py-5 px-6 text-right font-mono">867,608</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total de Activos', explicacion: 'Crecimiento del 19.6% por expansión en activos no corrientes (inversiones, PPE y CxC a largo plazo).' }); setShowAnalysisModal(true); }} className="py-5 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">19.62%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Evolución de pasivos' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera - Análisis Horizontal</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">2024</th>
                          <th className="py-4 px-6 font-bold text-right">Var. Absoluta</th>
                          <th className="py-4 px-6 font-bold text-right">Var. %</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="bg-slate-50"><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] text-lg">Pasivos y Patrimonio</td></tr>
                        
                        <tr className="bg-slate-50"><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] text-lg">Pasivos y Patrimonio</td></tr>
                        
                        <tr><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] pl-10 text-md bg-slate-50/50">Pasivos Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Pasivos Financieros</td><td className="py-2 px-6 text-right font-mono">5,749</td><td className="py-2 px-6 text-right font-mono">2,474</td><td className="py-2 px-6 text-right font-mono">3,275</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Pasivos Financieros (Corriente)', explicacion: 'Incremento por nuevo pasivo por contraprestación contingente del Proyecto San Gabriel (US$4.1M porción corriente).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">132.38%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Cuentas por Pagar Comerciales y Otras CxP</td><td className="py-2 px-6 text-right font-mono">264,138</td><td className="py-2 px-6 text-right font-mono">257,686</td><td className="py-2 px-6 text-right font-mono">6,452</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Cuentas por Pagar Comerciales y Otras CxP', explicacion: 'Incremento moderado alineado con mayor actividad productiva y volumen de operaciones.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">2.50%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-20">Cuentas por Pagar Comerciales</td><td className="py-2 px-6 text-right font-mono">209,307</td><td className="py-2 px-6 text-right font-mono">186,272</td><td className="py-2 px-6 text-right font-mono">23,035</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Cuentas por Pagar Comerciales', explicacion: 'Aumento por mayores obligaciones con proveedores nacionales asociadas a la expansión de operaciones mineras.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">12.37%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-20">Cuentas por Pagar a Entidades Relacionadas</td><td className="py-2 px-6 text-right font-mono">9,406</td><td className="py-2 px-6 text-right font-mono">36,512</td><td className="py-2 px-6 text-right font-mono">-27,106</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Cuentas por Pagar a Entidades Relacionadas', explicacion: 'Disminución significativa por liquidación de obligaciones pendientes con entidades del grupo.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-74.24%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-20">Otras Cuentas por Pagar</td><td className="py-2 px-6 text-right font-mono">45,425</td><td className="py-2 px-6 text-right font-mono">34,902</td><td className="py-2 px-6 text-right font-mono">10,523</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Cuentas por Pagar', explicacion: 'Aumento en otras cuentas por pagar operativas del ejercicio.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">30.15%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Provisión por Beneficios a los Empleados</td><td className="py-2 px-6 text-right font-mono">16,960</td><td className="py-2 px-6 text-right font-mono">23,249</td><td className="py-2 px-6 text-right font-mono">-6,289</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Provisión por Beneficios a los Empleados (Corriente)', explicacion: 'Disminución en provisiones corrientes por beneficios a empleados.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-27.05%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Provisiones</td><td className="py-2 px-6 text-right font-mono">41,430</td><td className="py-2 px-6 text-right font-mono">35,633</td><td className="py-2 px-6 text-right font-mono">5,797</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Provisiones (Corriente)', explicacion: 'Aumento en provisiones corrientes por cierre de minas y contingencias medioambientales y laborales.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">16.27%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Pasivos por Impuestos a las Ganancias</td><td className="py-2 px-6 text-right font-mono">21,364</td><td className="py-2 px-6 text-right font-mono">8,057</td><td className="py-2 px-6 text-right font-mono">13,307</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Pasivos por Impuestos a las Ganancias', explicacion: 'Mayor impuesto corriente por pagar por incremento sustancial en la ganancia antes de impuestos (+84%).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">165.16%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Pasivos Corrientes</td><td className="py-3 px-6 text-right font-mono">349,641</td><td className="py-3 px-6 text-right font-mono">327,099</td><td className="py-3 px-6 text-right font-mono">22,542</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Pasivos Corrientes', explicacion: 'Incremento moderado (+6.9%) por mayores CxP, provisiones e impuestos por pagar.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">6.89%</td></tr>
                        
                        <tr><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] pl-10 text-md bg-slate-50/50 pt-6">Pasivos No Corrientes</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otros Pasivos Financieros</td><td className="py-2 px-6 text-right font-mono">676,569</td><td className="py-2 px-6 text-right font-mono">581,719</td><td className="py-2 px-6 text-right font-mono">94,850</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Pasivos Financieros (No Corriente)', explicacion: 'Emisión de nuevos Bonos Senior Notes al 6.80% vencimiento 2032 (US$650M) para refinanciar bonos al 5.50% (2026), más contraprestación contingente (US$35.2M NC).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">16.31%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Provisión por Beneficios a los Empleados</td><td className="py-2 px-6 text-right font-mono">32,648</td><td className="py-2 px-6 text-right font-mono">12,806</td><td className="py-2 px-6 text-right font-mono">19,842</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Provisión por Beneficios a los Empleados (No Corriente)', explicacion: 'Mayor provisión por beneficios a empleados de largo plazo.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">154.94%</td></tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Provisiones</td><td className="py-2 px-6 text-right font-mono">168,230</td><td className="py-2 px-6 text-right font-mono">109,057</td><td className="py-2 px-6 text-right font-mono">59,173</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Provisiones (No Corriente)', explicacion: 'Incremento significativo en provisión para cierre de minas (de US$106M a US$165M) por cambios en estimaciones, principalmente en unidades mineras operativas (+US$58.8M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">54.26%</td></tr>
                        <tr className="border-b-2 border-slate-400 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Pasivos No Corrientes</td><td className="py-3 px-6 text-right font-mono">877,447</td><td className="py-3 px-6 text-right font-mono">703,582</td><td className="py-3 px-6 text-right font-mono">173,865</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Pasivos No Corrientes', explicacion: 'Crecimiento por refinanciamiento de deuda de largo plazo y mayores provisiones de cierre de minas.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">24.71%</td></tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Total Pasivos</td><td className="py-5 px-6 text-right font-mono">1,227,088</td><td className="py-5 px-6 text-right font-mono">1,030,681</td><td className="py-5 px-6 text-right font-mono">196,407</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Pasivos', explicacion: 'Aumento del 19% por refinanciamiento de bonos y mayores provisiones por cierre de unidades mineras.' }); setShowAnalysisModal(true); }} className="py-5 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">19.06%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Evolución de patrimonio' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Situación Financiera - Análisis Horizontal</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">2024</th>
                          <th className="py-4 px-6 font-bold text-right">Var. Absoluta</th>
                          <th className="py-4 px-6 font-bold text-right">Var. %</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="bg-slate-50"><td colSpan="5" className="py-3 px-6 font-bold text-[#0066cc] text-lg">Patrimonio</td></tr>
                        
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Capital Emitido</td><td className="py-2 px-6 text-right font-mono">750,497</td><td className="py-2 px-6 text-right font-mono">750,497</td><td className="py-2 px-6 text-right font-mono">0</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Capital Emitido', explicacion: 'Sin cambios. Capital emitido se mantiene estable.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.00%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Primas de Emisión</td><td className="py-2 px-6 text-right font-mono">218,450</td><td className="py-2 px-6 text-right font-mono">218,450</td><td className="py-2 px-6 text-right font-mono">0</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Primas de Emisión', explicacion: 'Sin cambios.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.00%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Acciones de Inversión</td><td className="py-2 px-6 text-right font-mono">791</td><td className="py-2 px-6 text-right font-mono">791</td><td className="py-2 px-6 text-right font-mono">0</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Acciones de Inversión', explicacion: 'Sin cambios.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.00%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Reservas de Capital</td><td className="py-2 px-6 text-right font-mono">195,441</td><td className="py-2 px-6 text-right font-mono">195,436</td><td className="py-2 px-6 text-right font-mono">5</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Reservas de Capital', explicacion: 'Variación mínima por ajustes en reserva legal.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.00%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Resultados Acumulados</td><td className="py-2 px-6 text-right font-mono">2,896,807</td><td className="py-2 px-6 text-right font-mono">2,225,611</td><td className="py-2 px-6 text-right font-mono">671,196</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Resultados Acumulados', explicacion: 'Incremento por la utilidad neta del ejercicio (US$782.1M) menos distribución de dividendos (US$111.0M aprox.).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">30.16%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6 pl-14">Otras Reservas de Patrimonio</td><td className="py-2 px-6 text-right font-mono">-96</td><td className="py-2 px-6 text-right font-mono">-96</td><td className="py-2 px-6 text-right font-mono">0</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Reservas de Patrimonio', explicacion: 'Sin cambios.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">0.00%</td></tr>
                        <tr className="border-b-2 border-slate-400 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 pl-10 uppercase text-sm">Total Patrimonio</td><td className="py-3 px-6 text-right font-mono">4,061,890</td><td className="py-3 px-6 text-right font-mono">3,390,689</td><td className="py-3 px-6 text-right font-mono">671,201</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Total Patrimonio', explicacion: 'Crecimiento del 19.8% impulsado por retención de utilidades generadas en el ejercicio.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">19.80%</td></tr>

                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">TOTAL PASIVO Y PATRIMONIO</td><td className="py-5 px-6 text-right font-mono">5,288,978</td><td className="py-5 px-6 text-right font-mono">4,421,370</td><td className="py-5 px-6 text-right font-mono">867,608</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'TOTAL PASIVO Y PATRIMONIO', explicacion: 'Incremento equilibrado entre pasivos (+19%) y patrimonio (+19.8%), reflejando crecimiento orgánico y financiamiento.' }); setShowAnalysisModal(true); }} className="py-5 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">19.62%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Evolución del estado de resultado' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Estado de Resultados - Análisis Horizontal</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Cuenta</th>
                          <th className="py-4 px-6 font-bold text-right">2025</th>
                          <th className="py-4 px-6 font-bold text-right">2024</th>
                          <th className="py-4 px-6 font-bold text-right">Var. Absoluta</th>
                          <th className="py-4 px-6 font-bold text-right">Var. %</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingresos de Actividades Ordinarias</td><td className="py-2 px-6 text-right font-mono">1,005,025</td><td className="py-2 px-6 text-right font-mono">665,978</td><td className="py-2 px-6 text-right font-mono">339,047</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ingresos de Actividades Ordinarias', explicacion: 'Incremento del 50.9% por mayores precios de metales: plata (US$365M->US$554M, +52%), oro (US$253M->US$278M, +10%), zinc (US$59M->US$68M). Ajustes favorables por precios provisionales (+US$59.6M vs -US$3.5M en 2024).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">50.91%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Costo de Ventas</td><td className="py-2 px-6 text-right font-mono">-478,774</td><td className="py-2 px-6 text-right font-mono">-459,382</td><td className="py-2 px-6 text-right font-mono">-19,392</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Costo de Ventas', explicacion: 'Aumento del 4.2% por mayores costos de producción: personal (+US$11.4M), servicios de terceros (+US$11.1M), repuestos (+US$7.2M). Compensado parcialmente por menor depreciación (US$80.3M->US$68.6M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-4.22%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 uppercase text-sm">Ganancia (Pérdida) Bruta</td><td className="py-3 px-6 text-right font-mono">526,251</td><td className="py-3 px-6 text-right font-mono">206,596</td><td className="py-3 px-6 text-right font-mono">319,655</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) Bruta', explicacion: 'Mejora sustancial (+155%) porque los ingresos crecieron +51% mientras los costos solo +4.2%. El margen bruto pasó de 31% a 52%.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">154.72%</td></tr>
                        
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos de Ventas y Distribución</td><td className="py-2 px-6 text-right font-mono">-16,972</td><td className="py-2 px-6 text-right font-mono">-11,841</td><td className="py-2 px-6 text-right font-mono">-5,131</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Gastos de Ventas y Distribución', explicacion: 'Mayor gasto por transporte (US$8.6M->US$12.3M), servicios de terceros y tributos, asociados al mayor volumen de ventas.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-43.33%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos de Administración</td><td className="py-2 px-6 text-right font-mono">-53,296</td><td className="py-2 px-6 text-right font-mono">-46,618</td><td className="py-2 px-6 text-right font-mono">-6,678</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Gastos de Administración', explicacion: 'Aumento por mayores gastos de personal (US$20.2M->US$24.8M), licencias de software (US$3.0M->US$3.7M) y honorarios profesionales.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-14.32%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Ingresos Operativos</td><td className="py-2 px-6 text-right font-mono">68,490</td><td className="py-2 px-6 text-right font-mono">127,172</td><td className="py-2 px-6 text-right font-mono">-58,682</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Ingresos Operativos', explicacion: 'Disminución por efecto no recurrente: en 2024 se registró la venta de Chaupiloma por US$70M (evento único). En 2025, extorno por reclamos tributarios (US$10.6M) y venta de repuestos (US$28.1M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-46.14%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Gastos Operativos</td><td className="py-2 px-6 text-right font-mono">-88,493</td><td className="py-2 px-6 text-right font-mono">-77,038</td><td className="py-2 px-6 text-right font-mono">-11,455</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Gastos Operativos', explicacion: 'Aumento por mayores provisiones de repuestos (US$22.4M vs US$18.7M), costos de suministros deteriorados (US$9.2M nuevo en 2025) y cambios en provisiones de cierre de exploración (US$5.2M vs US$0.5M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-14.87%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otras Ganancias (Pérdidas)</td><td className="py-2 px-6 text-right font-mono">-1,432</td><td className="py-2 px-6 text-right font-mono">551</td><td className="py-2 px-6 text-right font-mono">-1,983</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otras Ganancias (Pérdidas)', explicacion: 'En 2024 hubo reverso de contingencias (+US$0.6M); en 2025 se registró provisión por contingencias (-US$1.4M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-359.89%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 uppercase text-sm">Ganancia (Pérdida) Operativa</td><td className="py-3 px-6 text-right font-mono">434,548</td><td className="py-3 px-6 text-right font-mono">198,822</td><td className="py-3 px-6 text-right font-mono">235,726</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) Operativa', explicacion: 'Crecimiento del 119% impulsado por la mejora en ganancia bruta (+155%), pese al mayor gasto operativo neto.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">118.56%</td></tr>
                        
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingresos Financieros</td><td className="py-2 px-6 text-right font-mono">40,875</td><td className="py-2 px-6 text-right font-mono">5,735</td><td className="py-2 px-6 text-right font-mono">35,140</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ingresos Financieros', explicacion: 'Aumento excepcional por intereses sobre reclamos tributarios recuperados (US$28.5M, nuevo en 2025) y mayores intereses en depósitos a plazo (US$3.8M->US$11.6M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">612.73%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Gastos Financieros</td><td className="py-2 px-6 text-right font-mono">-74,871</td><td className="py-2 px-6 text-right font-mono">-52,291</td><td className="py-2 px-6 text-right font-mono">-22,580</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Gastos Financieros', explicacion: 'Aumento por mayores intereses de bonos (US$30.3M->US$46.9M por emisión al 6.80%), mayor valor razonable de contraprestación contingente (US$11.1M) y costos de baja de bonos anteriores (US$3.3M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-43.18%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Otros Ingresos (Gastos) de Subsidiarias</td><td className="py-2 px-6 text-right font-mono">404,778</td><td className="py-2 px-6 text-right font-mono">327,354</td><td className="py-2 px-6 text-right font-mono">77,424</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Otros Ingresos (Gastos) de Subsidiarias', explicacion: 'Mayor participación en resultados de subsidiarias: Cerro Verde (+US$81.1M), El Brocal (+US$52.7M), Coimolache (+US$38.9M), La Zanja (+US$21.8M) por mejores precios de metales.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">23.65%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Diferencias de Cambio Neto</td><td className="py-2 px-6 text-right font-mono">61,783</td><td className="py-2 px-6 text-right font-mono">-8,366</td><td className="py-2 px-6 text-right font-mono">70,149</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Diferencias de Cambio Neto', explicacion: 'Cambio de pérdida (-US$8.4M) a ganancia (+US$61.8M) por apreciación del sol frente al dólar (TC venta de 0.265 a 0.297). Posición activa neta en soles creció de US$452M a US$529M.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">838.50%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 uppercase text-sm">Ganancia (Pérdida) antes de Impuestos</td><td className="py-3 px-6 text-right font-mono">867,113</td><td className="py-3 px-6 text-right font-mono">471,254</td><td className="py-3 px-6 text-right font-mono">395,859</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) antes de Impuestos', explicacion: 'Mejora del 84% por ganancia operativa, participación en subsidiarias, ingresos financieros y ganancia cambiaria favorable.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">84.00%</td></tr>

                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ingreso (Gasto) por Impuesto</td><td className="py-2 px-6 text-right font-mono">-76,047</td><td className="py-2 px-6 text-right font-mono">-67,543</td><td className="py-2 px-6 text-right font-mono">-8,504</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ingreso (Gasto) por Impuesto', explicacion: 'Aumento del 12.6%: impuesto corriente duplicó (US$34.1M->US$70.4M) por mayor base imponible, compensado parcialmente por menor impuesto diferido (US$33.4M->US$5.6M).' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-12.59%</td></tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]"><td className="py-3 px-6 uppercase text-sm">Ganancia (Pérdida) Neta de Op. Continuadas</td><td className="py-3 px-6 text-right font-mono">791,066</td><td className="py-3 px-6 text-right font-mono">403,711</td><td className="py-3 px-6 text-right font-mono">387,355</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) Neta de Op. Continuadas', explicacion: 'Crecimiento del 96% por mejora integral en todas las líneas operativas y no operativas.' }); setShowAnalysisModal(true); }} className="py-3 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">95.95%</td></tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors"><td className="py-2 px-6">Ganancia (Pérdida) de Op. Discontinuadas</td><td className="py-2 px-6 text-right font-mono">-8,921</td><td className="py-2 px-6 text-right font-mono">-1,022</td><td className="py-2 px-6 text-right font-mono">-7,899</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) de Op. Discontinuadas', explicacion: 'Mayor pérdida por operaciones discontinuadas relacionadas con unidades mineras en proceso de cierre.' }); setShowAnalysisModal(true); }} className="py-2 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">-772.90%</td></tr>
                        
                        <tr className="font-bold bg-[#002855]/5 text-[#002855] text-lg border-t-4 border-[#002855]"><td className="py-5 px-6 uppercase tracking-wider">Ganancia (Pérdida) Neta del Ejercicio</td><td className="py-5 px-6 text-right font-mono">782,145</td><td className="py-5 px-6 text-right font-mono">402,689</td><td className="py-5 px-6 text-right font-mono">379,456</td><td onClick={() => { setActiveVariationAccount({ cuenta: 'Ganancia (Pérdida) Neta del Ejercicio', explicacion: 'Crecimiento excepcional del 94% por mayores precios de metales, eficiencia operativa, participación en subsidiarias y ganancia cambiaria favorable.' }); setShowAnalysisModal(true); }} className="py-5 px-6 text-right font-mono cursor-pointer hover:text-[#EAAA00] transition-colors">94.23%</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Indicadores de liquidez' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Indicadores de Liquidez</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Indicador</th>
                          <th className="py-4 px-6 font-bold text-center">2025</th>
                          <th className="py-4 px-6 font-bold text-center">2024</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Liquidez Corriente</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">1.83</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">1.52</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Prueba Ácida</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">1.71</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">1.39</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Liquidez Absoluta</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">0.70</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">0.82</td>
                        </tr>
                        <tr className="border-b-2 border-slate-300 font-bold bg-slate-100 text-[#002855]">
                          <td className="py-4 px-6 uppercase text-sm">Capital de Trabajo</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">291,450</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">170,447</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Indicadores de apalancamiento' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Indicadores de Apalancamiento Financiero o Solvencia</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Indicador</th>
                          <th className="py-4 px-6 font-bold text-center">2025</th>
                          <th className="py-4 px-6 font-bold text-center">2024</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Apalancamiento Financiero</td>
                          <td className="py-4 px-6 text-center font-mono">23.20%</td>
                          <td className="py-4 px-6 text-center font-mono">23.31%</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Solvencia Patrimonial a Largo Plazo</td>
                          <td className="py-4 px-6 text-center font-mono">21.60%</td>
                          <td className="py-4 px-6 text-center font-mono">20.75%</td>
                        </tr>
                        <tr className="border-b-2 border-slate-300 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Solvencia Patrimonial a Corto Plazo</td>
                          <td className="py-4 px-6 text-center font-mono">8.61%</td>
                          <td className="py-4 px-6 text-center font-mono">9.65%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Indicadores de gestión' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Indicadores de Gestión</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Indicador</th>
                          <th className="py-4 px-6 font-bold text-center">2025</th>
                          <th className="py-4 px-6 font-bold text-center">2024</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Stock Medio de Inventarios</td>
                          <td className="py-3 px-6 text-center font-mono">42,651</td>
                          <td className="py-3 px-6 text-center font-mono">42,440</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Inventarios (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">11.23</td>
                          <td className="py-3 px-6 text-center font-mono">10.82</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Rotación de Inventarios (días)</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">32</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">33</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Cuentas por Cobrar (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">3.43</td>
                          <td className="py-3 px-6 text-center font-mono">5.12</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Rotación de Cuentas por Cobrar (días)</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">105</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">70</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Cuentas por Pagar (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">2.29</td>
                          <td className="py-3 px-6 text-center font-mono">2.47</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Rotación de Cuentas por Pagar (días)</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">157</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">146</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Capital de Trabajo (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">3.45</td>
                          <td className="py-3 px-6 text-center font-mono">3.91</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Rotación de Capital de Trabajo (días)</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">104</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">92</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Activos (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">0.19</td>
                          <td className="py-3 px-6 text-center font-mono">0.15</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-6">Rotación de Activos (días)</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">1895</td>
                          <td className="py-3 px-6 text-center font-mono font-medium">2390</td>
                        </tr>
                        <tr className="border-b-2 border-slate-300 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-3 px-6">Rotación de Patrimonio (veces)</td>
                          <td className="py-3 px-6 text-center font-mono">0.25</td>
                          <td className="py-3 px-6 text-center font-mono">0.20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Indicadores de rentabilidad' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Indicadores de Rentabilidad</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Indicador</th>
                          <th className="py-4 px-6 font-bold text-center">2025</th>
                          <th className="py-4 px-6 font-bold text-center">2024</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Margen de Utilidad Bruta</td>
                          <td className="py-4 px-6 text-center font-mono text-lg text-[#0066cc]">52.36%</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">31.02%</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Margen de Utilidad Neta</td>
                          <td className="py-4 px-6 text-center font-mono text-lg text-[#0066cc]">77.82%</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">60.47%</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Rentabilidad Patrimonial (ROE)</td>
                          <td className="py-4 px-6 text-center font-mono text-lg text-[#0066cc]">19.26%</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">11.88%</td>
                        </tr>
                        <tr className="border-b-2 border-slate-300 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Rentabilidad del Activo (ROA)</td>
                          <td className="py-4 px-6 text-center font-mono text-lg text-[#0066cc]">14.79%</td>
                          <td className="py-4 px-6 text-center font-mono text-lg">9.11%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Perspectiva financiera' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Perspectiva Financiera</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold">Objetivo Estratégico</th>
                          <th className="py-4 px-6 font-bold text-center">Indicador (KPI)</th>
                          <th className="py-4 px-6 font-bold text-center">Meta</th>
                          <th className="py-4 px-6 font-bold">Iniciativa Estratégica</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Incrementar la rentabilidad patrimonial</td>
                          <td className="py-4 px-6 text-center font-mono">ROE</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 20%</td>
                          <td className="py-4 px-6">Optimización de estructura de capital y eficiencia operativa</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Mejorar el margen de utilidad bruta</td>
                          <td className="py-4 px-6 text-center font-mono">Margen de Utilidad Bruta</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 55%</td>
                          <td className="py-4 px-6">Reducción de costos de producción y mejora de leyes de mineral</td>
                        </tr>
                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Mantener solvencia y liquidez adecuada</td>
                          <td className="py-4 px-6 text-center font-mono">Liquidez Corriente</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 1.5</td>
                          <td className="py-4 px-6">Gestión eficiente del capital de trabajo</td>
                        </tr>
                        <tr className="border-b-2 border-slate-300 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Controlar el nivel de endeudamiento</td>
                          <td className="py-4 px-6 text-center font-mono">Apalancamiento Financiero</td>
                          <td className="py-4 px-6 text-center font-bold text-green-600">≤ 25%</td>
                          <td className="py-4 px-6">Política de endeudamiento conservadora y refinanciamiento estratégico</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Perspectiva del cliente' ? (
                <div className="w-full">
                  <div className="bg-[#5c7f35] text-white p-4 rounded-t-xl border-b-4 border-[#8cb644]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Perspectiva del Cliente</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-[#e9f2d9] text-[#4a6629] text-sm md:text-base border-b-2 border-[#b5d18d]">
                          <th className="py-4 px-6 font-bold">Objetivo Estratégico</th>
                          <th className="py-4 px-6 font-bold text-center">Indicador (KPI)</th>
                          <th className="py-4 px-6 font-bold text-center">Meta</th>
                          <th className="py-4 px-6 font-bold">Iniciativa Estratégica</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base bg-[#f5f9ef]">
                        <tr className="border-b border-[#dceaca] hover:bg-[#ebf4e1] transition-colors">
                          <td className="py-4 px-6 font-medium">Acelerar la recuperación de cuentas por cobrar</td>
                          <td className="py-4 px-6 text-center font-mono">Rotación de CxC (días)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#5c7f35]">≤ 60 días</td>
                          <td className="py-4 px-6">Plan de cobranza proactiva y descuento por pronto pago</td>
                        </tr>
                        <tr className="border-b border-[#dceaca] hover:bg-[#ebf4e1] transition-colors bg-[#f0f6e9]">
                          <td className="py-4 px-6 font-medium">Incrementar la satisfacción del cliente</td>
                          <td className="py-4 px-6 text-center font-mono">Índice de Satisfacción del Cliente</td>
                          <td className="py-4 px-6 text-center font-bold text-[#5c7f35]">≥ 90%</td>
                          <td className="py-4 px-6">Programa de calidad en entregas de concentrados y servicio postventa</td>
                        </tr>
                        <tr className="border-b-2 border-[#b5d18d] hover:bg-[#ebf4e1] transition-colors">
                          <td className="py-4 px-6 font-medium">Diversificar la base de clientes</td>
                          <td className="py-4 px-6 text-center font-mono">% de ingresos del cliente principal</td>
                          <td className="py-4 px-6 text-center font-bold text-[#5c7f35]">≤ 30%</td>
                          <td className="py-4 px-6">Desarrollo de nuevos mercados internacionales y acuerdos comerciales</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Perspectiva de procesos internos' ? (
                <div className="w-full">
                  <div className="bg-[#cc5500] text-white p-4 rounded-t-xl border-b-4 border-[#ff7722]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Perspectiva de Procesos Internos</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-[#ffeedd] text-[#993300] text-sm md:text-base border-b-2 border-[#ffccaa]">
                          <th className="py-4 px-6 font-bold">Objetivo Estratégico</th>
                          <th className="py-4 px-6 font-bold text-center">Indicador (KPI)</th>
                          <th className="py-4 px-6 font-bold text-center">Meta</th>
                          <th className="py-4 px-6 font-bold">Iniciativa Estratégica</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base bg-[#fff8f2]">
                        <tr className="border-b border-[#ffeedd] hover:bg-[#ffeedd] transition-colors">
                          <td className="py-4 px-6 font-medium">Optimizar la gestión de inventarios</td>
                          <td className="py-4 px-6 text-center font-mono">Rotación de Inventarios (días)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#cc5500]">≤ 28 días</td>
                          <td className="py-4 px-6">Sistema de planificación y control de inventarios (Just-in-Time)</td>
                        </tr>
                        <tr className="border-b border-[#ffeedd] hover:bg-[#ffeedd] transition-colors bg-[#fff2e6]">
                          <td className="py-4 px-6 font-medium">Mejorar la eficiencia operativa</td>
                          <td className="py-4 px-6 text-center font-mono">Margen Operativo</td>
                          <td className="py-4 px-6 text-center font-bold text-[#cc5500]">≥ 45%</td>
                          <td className="py-4 px-6">Automatización de procesos mineros y reducción de tiempos muertos</td>
                        </tr>
                        <tr className="border-b-2 border-[#ffccaa] hover:bg-[#ffeedd] transition-colors">
                          <td className="py-4 px-6 font-medium">Reducir gastos de administración</td>
                          <td className="py-4 px-6 text-center font-mono">Gastos Adm. / Ventas</td>
                          <td className="py-4 px-6 text-center font-bold text-[#cc5500]">≤ 4.5%</td>
                          <td className="py-4 px-6">Digitalización de procesos administrativos y optimización organizacional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Perspectiva de aprendizaje y crecimiento' ? (
                <div className="w-full">
                  <div className="bg-[#663399] text-white p-4 rounded-t-xl border-b-4 border-[#8855bb]">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Perspectiva de Aprendizaje y Crecimiento</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-[#f0e6ff] text-[#441177] text-sm md:text-base border-b-2 border-[#d9cce6]">
                          <th className="py-4 px-6 font-bold">Objetivo Estratégico</th>
                          <th className="py-4 px-6 font-bold text-center">Indicador (KPI)</th>
                          <th className="py-4 px-6 font-bold text-center">Meta</th>
                          <th className="py-4 px-6 font-bold">Iniciativa Estratégica</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base bg-[#f9f5ff]">
                        <tr className="border-b border-[#e6d9f2] hover:bg-[#f0e6ff] transition-colors">
                          <td className="py-4 px-6 font-medium">Desarrollar competencias del personal</td>
                          <td className="py-4 px-6 text-center font-mono">Horas de capacitación per cápita</td>
                          <td className="py-4 px-6 text-center font-bold text-[#663399]">≥ 40 h/año</td>
                          <td className="py-4 px-6">Programa de formación técnica en seguridad y operaciones mineras</td>
                        </tr>
                        <tr className="border-b border-[#e6d9f2] hover:bg-[#f0e6ff] transition-colors bg-[#f5efff]">
                          <td className="py-4 px-6 font-medium">Mejorar el clima organizacional</td>
                          <td className="py-4 px-6 text-center font-mono">Índice de Satisfacción Laboral</td>
                          <td className="py-4 px-6 text-center font-bold text-[#663399]">≥ 85%</td>
                          <td className="py-4 px-6">Plan de bienestar, incentivos y desarrollo profesional</td>
                        </tr>
                        <tr className="border-b-2 border-[#d9cce6] hover:bg-[#f0e6ff] transition-colors">
                          <td className="py-4 px-6 font-medium">Impulsar la innovación tecnológica</td>
                          <td className="py-4 px-6 text-center font-mono">Inversión en Tecnología / Ventas</td>
                          <td className="py-4 px-6 text-center font-bold text-[#663399]">≥ 2%</td>
                          <td className="py-4 px-6">Plan de transformación digital y adopción de minería 4.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Balanced Scorecard Completo' ? (
                <div className="w-full">
                  <div className="bg-[#002855] text-white p-4 rounded-t-xl border-b-4 border-[#EAAA00] flex justify-between items-center">
                    <h3 className="text-xl font-bold uppercase tracking-wider">Balanced Scorecard Consolidado</h3>
                  </div>
                  <div className="overflow-x-auto w-full border-x border-b border-slate-200 rounded-b-xl shadow-inner bg-white">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                      <thead>
                        <tr className="bg-slate-200 text-[#002855] text-sm md:text-base border-b-2 border-slate-300">
                          <th className="py-4 px-6 font-bold text-center border-r border-slate-300 w-[150px]">Perspectiva</th>
                          <th className="py-4 px-6 font-bold">Objetivo Estratégico</th>
                          <th className="py-4 px-6 font-bold text-center">Indicador (KPI)</th>
                          <th className="py-4 px-6 font-bold text-center">Meta</th>
                          <th className="py-4 px-6 font-bold">Iniciativa Estratégica</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-700 text-sm md:text-base">
                        {/* FINANCIERA */}
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td rowSpan="4" className="py-4 px-4 font-bold text-center bg-[#002855] text-white border-r border-slate-300 align-middle">
                            Financiera
                          </td>
                          <td className="py-4 px-6 font-medium">Incrementar la rentabilidad patrimonial</td>
                          <td className="py-4 px-6 text-center font-mono">ROE</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 20%</td>
                          <td className="py-4 px-6">Optimización de estructura de capital y eficiencia operativa</td>
                        </tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Mejorar el margen de utilidad bruta</td>
                          <td className="py-4 px-6 text-center font-mono">Margen de Utilidad Bruta</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 55%</td>
                          <td className="py-4 px-6">Reducción de costos de producción y mejora de leyes de mineral</td>
                        </tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Mantener solvencia y liquidez adecuada</td>
                          <td className="py-4 px-6 text-center font-mono">Liquidez Corriente</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 1.5</td>
                          <td className="py-4 px-6">Gestión eficiente del capital de trabajo</td>
                        </tr>
                        <tr className="border-b-4 border-slate-300 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Controlar el nivel de endeudamiento</td>
                          <td className="py-4 px-6 text-center font-mono">Apalancamiento Financiero</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≤ 25%</td>
                          <td className="py-4 px-6">Política de endeudamiento conservadora y refinanciamiento estratégico</td>
                        </tr>

                        {/* CLIENTE */}
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td rowSpan="3" className="py-4 px-4 font-bold text-center bg-[#003B73] text-white border-r border-slate-300 align-middle">
                            Cliente
                          </td>
                          <td className="py-4 px-6 font-medium">Acelerar la recuperación de cuentas por cobrar</td>
                          <td className="py-4 px-6 text-center font-mono">Rotación de CxC (días)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≤ 60 días</td>
                          <td className="py-4 px-6">Plan de cobranza proactiva y descuento por pronto pago</td>
                        </tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Incrementar la satisfacción del cliente</td>
                          <td className="py-4 px-6 text-center font-mono">Índice de Satisfacción del Cliente</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 90%</td>
                          <td className="py-4 px-6">Programa de calidad en entregas de concentrados y servicio postventa</td>
                        </tr>
                        <tr className="border-b-4 border-slate-300 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Diversificar la base de clientes</td>
                          <td className="py-4 px-6 text-center font-mono">% de ingresos del cliente principal</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≤ 30%</td>
                          <td className="py-4 px-6">Desarrollo de nuevos mercados internacionales y acuerdos comerciales</td>
                        </tr>

                        {/* PROCESOS INTERNOS */}
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td rowSpan="3" className="py-4 px-4 font-bold text-center bg-[#004A8F] text-white border-r border-slate-300 align-middle">
                            Procesos Internos
                          </td>
                          <td className="py-4 px-6 font-medium">Optimizar la gestión de inventarios</td>
                          <td className="py-4 px-6 text-center font-mono">Rotación de Inventarios (días)</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≤ 28 días</td>
                          <td className="py-4 px-6">Sistema de planificación y control de inventarios (Just-in-Time)</td>
                        </tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Mejorar la eficiencia operativa</td>
                          <td className="py-4 px-6 text-center font-mono">Margen Operativo</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 45%</td>
                          <td className="py-4 px-6">Automatización de procesos mineros y reducción de tiempos muertos</td>
                        </tr>
                        <tr className="border-b-4 border-slate-300 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Reducir gastos de administración</td>
                          <td className="py-4 px-6 text-center font-mono">Gastos Adm. / Ventas</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≤ 4.5%</td>
                          <td className="py-4 px-6">Digitalización de procesos administrativos y optimización organizacional</td>
                        </tr>

                        {/* APRENDIZAJE Y CRECIMIENTO */}
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <td rowSpan="3" className="py-4 px-4 font-bold text-center bg-[#005AA5] text-white border-r border-slate-300 align-middle rounded-bl-xl">
                            Aprendizaje y Crecimiento
                          </td>
                          <td className="py-4 px-6 font-medium">Desarrollar competencias del personal</td>
                          <td className="py-4 px-6 text-center font-mono">Horas de capacitación per cápita</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 40 h/año</td>
                          <td className="py-4 px-6">Programa de formación técnica en seguridad y operaciones mineras</td>
                        </tr>
                        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors bg-slate-50/50">
                          <td className="py-4 px-6 font-medium">Mejorar el clima organizacional</td>
                          <td className="py-4 px-6 text-center font-mono">Índice de Satisfacción Laboral</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 85%</td>
                          <td className="py-4 px-6">Plan de bienestar, incentivos y desarrollo profesional</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-medium">Impulsar la innovación tecnológica</td>
                          <td className="py-4 px-6 text-center font-mono">Inversión en Tecnología / Ventas</td>
                          <td className="py-4 px-6 text-center font-bold text-[#0066cc]">≥ 2%</td>
                          <td className="py-4 px-6">Plan de transformación digital y adopción de minería 4.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Conclusiones' ? (
                <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 flex flex-col min-h-[400px]">
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-[#002855]/10 flex items-center justify-center text-[#002855]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#002855]">Conclusiones</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,40,85,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#002855] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">1. Sólida mejora en rentabilidad y márgenes operativos</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          La empresa experimentó un crecimiento excepcional en su ganancia neta, impulsado por el incremento en ingresos gracias al alza de precios de metales preciosos (plata +52%, oro +10%). Evidenciando una gestión operativa altamente eficiente que logró que los ingresos crecieran significativamente más rápido que los costos de producción (+4.2%).
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-bold text-sm border border-green-200">
                            Ganancia Neta +94.2%
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#002855] font-bold text-sm border border-blue-200">
                            Mg. Bruto 52.36%
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 font-bold text-sm border border-purple-200">
                            ROE 19.26%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,40,85,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#002855] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">2. Posición de liquidez y solvencia saludable con bajo apalancamiento</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          Los indicadores de liquidez muestran una posición financiera sólida, con una liquidez y prueba ácida superiores al estándar de 1.0. El apalancamiento financiero se mantiene conservador, lo que indica que la empresa financia sus operaciones mayoritariamente con patrimonio propio. La solvencia patrimonial a largo plazo se encuentra en niveles controlados.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-200">
                            Liq. Corriente 1.83
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-sm border border-emerald-200">
                            Cap. Trabajo +71%
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300">
                            Patrimonio 76.8%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,40,85,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#002855] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">3. Fuerte contribución de subsidiarias y asociadas</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          La participación en resultados de subsidiarias y asociadas constituyó una fuente fundamental de ingresos para la empresa. Cerro Verde, El Brocal y Coimolache aportaron significativamente. Las inversiones en subsidiarias representan casi la mitad de los activos totales, evidenciando la estrategia de diversificación que genera valor sustancial.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 text-orange-700 font-bold text-sm border border-orange-200">
                            Aporte US$404.8M (+23.6%)
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-sm border border-indigo-200">
                            Activos en Subsidiarias 46.8%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,40,85,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#002855] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">4. Inversión significativa en activos productivos</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          La empresa realizó inversiones importantes destinadas a desarrollo de mina, trabajos en curso y transferencias de obras a activos productivos. La rotación de inventarios se mantuvo eficiente. Sin embargo, la rotación de cuentas por cobrar aumentó considerablemente, lo cual representa un área de atención para la gestión del capital de trabajo.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 font-bold text-sm border border-teal-200">
                            Inv. PPE US$404.2M (+35.1%)
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 font-bold text-sm border border-red-200">
                            CxC 105 días (Atención)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,40,85,0.1)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#002855]/5 flex items-center justify-center text-[#002855] group-hover:bg-[#002855] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">5. Impacto favorable del entorno macroeconómico</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          La apreciación del sol peruano generó una ganancia cambiaria, aprovechando la posición activa neta en soles. Adicionalmente, la empresa ejecutó un refinanciamiento exitoso de su deuda extendiendo el perfil de vencimientos y asegurando financiamiento a largo plazo, aunque con un mayor costo financiero.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-bold text-sm border border-green-200">
                            Ganancia Cambiaria US$61.8M
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm border border-blue-200">
                            Emisión Bonos US$650M
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeEvolutivoDetail === 'Recomendaciones' ? (
                <div className="w-full bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 flex flex-col min-h-[400px]">
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-full bg-[#EAAA00]/20 flex items-center justify-center text-[#d49a00]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#002855]">Recomendaciones</h3>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(234,170,0,0.15)] hover:border-[#EAAA00]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#EAAA00]/10 flex items-center justify-center text-[#d49a00] group-hover:bg-[#EAAA00] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">1. Mejorar la gestión de cuentas por cobrar</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          La rotación de cuentas por cobrar aumentó a 105 días, lo que implica un mayor período de financiamiento. Es fundamental revertir esta tendencia mediante políticas más estrictas y acuerdos que fomenten el pago temprano.
                        </p>
                        <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Revisar políticas de crédito y plazos de pago con clientes nacionales.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Implementar descuentos por pronto pago.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Meta: Reducir el período de cobro a 60 días o menos.</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(234,170,0,0.15)] hover:border-[#EAAA00]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#EAAA00]/10 flex items-center justify-center text-[#d49a00] group-hover:bg-[#EAAA00] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">2. Diversificar la base de clientes</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          Los tres principales clientes representan el 76% acumulado de las ventas, generando un riesgo de concentración. Se debe mitigar este riesgo desarrollando nuevos mercados y asegurando acuerdos a largo plazo.
                        </p>
                        <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Desarrollar nuevos mercados en Europa y Asia.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Establecer acuerdos comerciales a largo plazo con nuevos compradores.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Meta: Ningún cliente individual debe superar el 30% de ingresos.</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(234,170,0,0.15)] hover:border-[#EAAA00]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#EAAA00]/10 flex items-center justify-center text-[#d49a00] group-hover:bg-[#EAAA00] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">3. Optimizar la estructura de costos financieros</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          Los costos financieros aumentaron 43.2% por la nueva emisión de bonos. Es clave evaluar continuamente las tasas y gestionar activamente la posición cambiaria para proteger la rentabilidad de fluctuaciones adversas.
                        </p>
                        <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Evaluar oportunidades de refinanciamiento en mercados internacionales.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Gestionar activamente la posición cambiaria.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Reducir progresivamente el pasivo por contraprestación (Proyecto San Gabriel).</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(234,170,0,0.15)] hover:border-[#EAAA00]/50 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#EAAA00]/10 flex items-center justify-center text-[#d49a00] group-hover:bg-[#EAAA00] group-hover:text-white transition-colors duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-bold text-[#002855] mb-3">4. Fortalecer la gestión ambiental y cierre de minas</h4>
                        <p className="text-slate-600 leading-relaxed text-justify mb-4">
                          Las provisiones para cierre de minas crecieron 45.6%. Es indispensable aplicar un seguimiento riguroso e invertir en tecnologías que ayuden a mitigar los costos a largo plazo y evitar sorpresas en los estados financieros.
                        </p>
                        <div className="flex flex-col gap-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Revisión trimestral de estimaciones de cierre.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Constituir fondo de fideicomiso dedicado al cierre.</div>
                          <div className="flex items-start gap-2 text-sm text-slate-700"><span className="text-[#EAAA00] font-bold">✓</span> Invertir en tecnologías de remediación ambiental eficientes.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <span className="text-xl md:text-2xl text-slate-600 mb-6 text-center">
                    Este espacio está reservado para la explicación detallada de <strong>{activeEvolutivoDetail}</strong>.
                  </span>
                  <p className="text-slate-500 max-w-2xl text-center">
                    Aquí podrás agregar gráficos, tablas o texto explicativo sobre este punto. Actualmente se encuentra en desarrollo.
                  </p>
                </>
              )}
            </div>
          ) : !activeEvolutivoSection ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                "Análisis Vertical",
                "Análisis Horizontal",
                "Ratios Financieros",
                "Balanced Scorecard"
              ].map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (section === "Análisis Vertical" || section === "Análisis Horizontal" || section === "Ratios Financieros" || section === "Balanced Scorecard") {
                      setActiveEvolutivoSection(section);
                    }
                  }} 
                  className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                    {section}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {activeEvolutivoSection === "Análisis Vertical" && [
                "Composición de activos",
                "Composición de pasivos",
                "Composición de patrimonio",
                "Composición del estado de resultado"
              ].map((subSection, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvolutivoDetail(subSection)}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                    {subSection}
                  </span>
                </button>
              ))}
              
              {activeEvolutivoSection === "Análisis Horizontal" && [
                "Evolución de activos",
                "Evolución de pasivos",
                "Evolución de patrimonio",
                "Evolución del estado de resultado"
              ].map((subSection, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvolutivoDetail(subSection)}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                    {subSection}
                  </span>
                </button>
              ))}
              
              {activeEvolutivoSection === "Ratios Financieros" && [
                "Indicadores de liquidez",
                "Indicadores de apalancamiento",
                "Indicadores de gestión",
                "Indicadores de rentabilidad"
              ].map((subSection, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvolutivoDetail(subSection)}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                    {subSection}
                  </span>
                </button>
              ))}
              
              {activeEvolutivoSection === "Balanced Scorecard" && [
                "Perspectiva financiera",
                "Perspectiva del cliente",
                "Perspectiva de procesos internos",
                "Perspectiva de aprendizaje y crecimiento",
                "Balanced Scorecard Completo",
                "Conclusiones",
                "Recomendaciones"
              ].map((subSection, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvolutivoDetail(subSection)}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center justify-center gap-2 min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-[#002855] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10 text-xl md:text-2xl font-semibold text-[#002855] group-hover:text-white transition-colors duration-300">
                    {subSection}
                  </span>
                </button>
              ))}
            </div>
          )}

        </div>
        <button 
          onClick={goToCover} 
          className="mt-16 text-[#002855] font-medium hover:text-[#EAAA00] transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Volver a la portada
        </button>
      </div>
    );
  }

  return null;
}
