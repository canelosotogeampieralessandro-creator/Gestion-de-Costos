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
          // Usar la imagen directamente (Vite optimizarÃ¡ automÃ¡ticamente)
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
        { id: 1, shortTitle: "Impacto 1", title: "La empresa enfrenta un alto riesgo de fallas catastrÃ³ficas en presas de relaves hÃºmedos, junto con un uso ineficiente y costoso del recurso hÃ­drico.", fullTitle: "La empresa enfrenta un alto riesgo de fallas catastrÃ³ficas en presas de relaves hÃºmedos, junto con un uso ineficiente y costoso del recurso hÃ­drico.", content: "RepresentaciÃ³n visual del riesgo en presas de relaves.", imageUrl: "/images-optimized/impacto-1.jpg" },
        { id: 2, shortTitle: "Impacto 2", title: "Existe una fuerte dependencia de combustibles fÃ³siles y energÃ­a intensiva en carbono, lo que incrementa costos operativos y exposiciÃ³n a riesgos climÃ¡ticos y financieros.", fullTitle: "Existe una fuerte dependencia de combustibles fÃ³siles y energÃ­a intensiva en carbono, lo que incrementa costos operativos y exposiciÃ³n a riesgos climÃ¡ticos y financieros.", content: "GrÃ¡fico de dependencia de combustibles fÃ³siles.", imageUrl: "/images-optimized/impacto-2.jpg" },
        { id: 3, shortTitle: "Impacto 3", title: "La acumulaciÃ³n y postergaciÃ³n de pasivos ambientales mineros genera contingencias legales, sanciones econÃ³micas y deterioro de la imagen corporativa.", fullTitle: "La acumulaciÃ³n y postergaciÃ³n de pasivos ambientales mineros genera contingencias legales, sanciones econÃ³micas y deterioro de la imagen corporativa.", content: "IlustraciÃ³n de pasivos ambientales.", imageUrl: "/images-optimized/impacto-3.jpg" },
        { id: 4, shortTitle: "Impacto 4", title: "El manejo inadecuado de aguas Ã¡cidas y lodos residuales provoca riesgos de contaminaciÃ³n, multas regulatorias y conflictos sociales que afectan la continuidad operativa.", fullTitle: "El manejo inadecuado de aguas Ã¡cidas y lodos residuales provoca riesgos de contaminaciÃ³n, multas regulatorias y conflictos sociales que afectan la continuidad operativa.", content: "FotografÃ­a de manejo de aguas.", imageUrl: "/images-optimized/impacto-4.jpg" },
      ]
    },
    {
      id: 2,
      title: "Propuesta de mejora",
      proposals: [
        { 
          id: 1, 
          shortTitle: "Propuesta 1", 
          title: "TransiciÃ³n Integral hacia Sistemas de Relaves Filtrados y MaximizaciÃ³n de la RecirculaciÃ³n HÃ­drica.", 
          fullTitle: "TransiciÃ³n Integral hacia Sistemas de Relaves Filtrados y MaximizaciÃ³n de la RecirculaciÃ³n HÃ­drica.", 
          imageUrl: "https://lh3.googleusercontent.com/d/1LJKuGO5cyGAxKMdmIrCR322YsF02NlrM",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                ImplementaciÃ³n extensiva de <strong>plantas de filtrado mecÃ¡nico de relaves</strong> (ej. Orcopampa) para reducir drÃ¡sticamente la humedad antes de su disposiciÃ³n final, permitiendo un almacenamiento seguro y maximizando la eficiencia.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">ReducciÃ³n de OpEx</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">El agua recuperada retorna al ciclo cerrado (consolidando tasas de recirculaciÃ³n del 88%-99%), reduciendo tarifas hÃ­dricas y consumo energÃ©tico por bombeo.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">MitigaciÃ³n de Riesgos</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">La disposiciÃ³n en estado semiseco elimina riesgos de licuefacciÃ³n y colapso, impactando positivamente en las primas de seguros ambientales.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Cierre de Minas Eficiente</h4>
                  </div>
                  <p className="text-base text-slate-600 leading-snug">Simplifica la ingenierÃ­a civil en la etapa de cierre, reduciendo matemÃ¡ticamente el valor presente de la provisiÃ³n financiera (NIC 37).</p>
                </div>
              </div>
            </div>
          ) 
        },
        { 
          id: 2, 
          shortTitle: "Propuesta 2", 
          title: "DescarbonizaciÃ³n Operativa y CuantificaciÃ³n de la Huella de Carbono bajo EstÃ¡ndares ISO", 
          fullTitle: "DescarbonizaciÃ³n Operativa y CuantificaciÃ³n de la Huella de Carbono bajo EstÃ¡ndares ISO", 
          imageUrl: "https://lh3.googleusercontent.com/d/1ds33hNAh4FOMTQTABLs6dXPbYvFbfBjv",
          content: (
            <div className="flex flex-col gap-8 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
                La dependencia de combustibles fÃ³siles expone a la corporaciÃ³n a riesgos de transiciÃ³n climÃ¡tica. Se propone la ejecuciÃ³n de un <strong>programa agresivo de electrificaciÃ³n de la flota minera</strong> y la maximizaciÃ³n del autoabastecimiento con energÃ­a renovable, apalancando activos limpios como la Central HidroelÃ©ctrica Huanza.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">ISO 14064-1</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">MediciÃ³n rigurosa de gases de efecto invernadero para identificar con precisiÃ³n forense las ineficiencias energÃ©ticas en cada unidad de negocio.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">OptimizaciÃ³n de Costos</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">ContracciÃ³n a corto plazo de partidas presupuestales destinadas a la adquisiciÃ³n de diÃ©sel, lubricantes, grasas y aceites de maquinaria.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Perfil ESG y CrÃ©dito</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Mejora crediticia que habilita la emisiÃ³n de <em>Bonos Verdes</em> y prÃ©stamos vinculados a la sostenibilidad con tasas preferenciales.</p>
                </div>
              </div>
              <div className="mt-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#002855] py-4 px-6 border-b-4 border-[#EAAA00]">
                  <h4 className="text-white font-bold text-lg">Emisiones de GEI por Unidad Minera (AÃ±o 2024)</h4>
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
                  <strong>Nota:</strong> Datos consolidados extraÃ­dos de la cuantificaciÃ³n oficial de emisiones corporativas de CompaÃ±Ã­a de Minas Buenaventura correspondientes a las fuentes de impacto primario.
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 3, 
          shortTitle: "Propuesta 3", 
          title: "EjecuciÃ³n Proactiva y Acelerada del Cierre de Pasivos Ambientales Mineros (PAM)", 
          fullTitle: "EjecuciÃ³n Proactiva y Acelerada del Cierre de Pasivos Ambientales Mineros (PAM)", 
          imageUrl: "https://lh3.googleusercontent.com/d/1qlhhIGrgXoRcqMSn65Z2nvPyQOwbpuzx",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                La inacciÃ³n frente a los Pasivos Ambientales Mineros (PAM) inactivos genera cargas financieras y expone a la empresa a severas multas de hasta <strong>600 UIT</strong>. Se propone una estrategia corporativa de <strong>remediaciÃ³n voluntaria y acelerada</strong>, focalizando recursos en planes aprobados por el MINEM (Ã¡reas como <em>"Rifle Rumimaqui"</em>, <em>"Lircay"</em> y <em>"Hualgayoc"</em> operadas por CompaÃ±Ã­a Minera Colquirrumi S.A.).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">MitigaciÃ³n Legal y Reputacional</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Previene la imposiciÃ³n de multas coercitivas estatales escalonadas y reconstruye activamente la confianza corroida con las comunidades aledaÃ±as.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">OptimizaciÃ³n Contable (NIC 37)</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Extingue el pasivo financiero (valor presente) anticipadamente, mitigando el incremento por la tasa de descuento y reduciendo el apalancamiento en el balance general.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">GeneraciÃ³n de Escudos Fiscales</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Los gastos de remediaciÃ³n ambiental cumplen el <em>Principio de Causalidad</em>, optimizando la carga tributaria en ejercicios con altas utilidades operativas.</p>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 4, 
          shortTitle: "Propuesta 4", 
          title: "ImplementaciÃ³n de Sistemas Avanzados de Tratamiento de Aguas Ãcidas y DeshidrataciÃ³n de Lodos", 
          fullTitle: "ImplementaciÃ³n de Sistemas Avanzados de Tratamiento de Aguas Ãcidas y DeshidrataciÃ³n de Lodos", 
          imageUrl: "https://lh3.googleusercontent.com/d/1ysZ2mjdf30HGHiuil1rErg236zIYFqPO",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El manejo inadecuado de efluentes es una vulnerabilidad crÃ­tica ante el OEFA. Se propone inyectar capital en la <strong>modernizaciÃ³n de la infraestructura hÃ­drica</strong>, incorporando tecnologÃ­a de punta (decantadores centrÃ­fugos industriales y sistemas automatizados) para optimizar el tratamiento de las aguas Ã¡cidas generadas en los socavones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">AmortizaciÃ³n del CapEx</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">La inversiÃ³n en tecnologÃ­a de separaciÃ³n sÃ³lido-lÃ­quido se amortiza rÃ¡pidamente al evitar multas recurrentes y paralizaciones ordenadas por los reguladores.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">Eficiencia LogÃ­stica</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">El bajo contenido de humedad residual minimiza el volumen de lodos a transportar, reduciendo drÃ¡sticamente costos logÃ­sticos y requerimientos de Ã¡rea de disposiciÃ³n.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4 text-[#002855]">
                    <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg leading-tight">ProtecciÃ³n de Licencia Social</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-snug">Garantizar la calidad quÃ­mica de los efluentes previene conflictos sociales (ej. Orcopampa, Julcani) y asegura la continuidad ininterrumpida de las operaciones.</p>
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
        { id: 'incentivos', title: "Incentivos Estructurales para Empresas que Adoptan PrÃ¡cticas Ambientales Sostenibles y Excelencia Operativa" },
        { id: 'sanciones', title: "Sanciones Aplicables a Empresas que Evaden la InternalizaciÃ³n de Costos Ambientales" }
      ],
      proposals: [
        { id: 1, subCategoryId: 'incentivos', shortTitle: "Incentivo 1", title: "Incentivo 1", fullTitle: "Incentivo 1", content: "Desarrollo del primer incentivo (pendiente de aÃ±adir texto)." },
        { id: 2, subCategoryId: 'incentivos', shortTitle: "Incentivo 2", title: "Incentivo 2", fullTitle: "Incentivo 2", content: "Desarrollo del segundo incentivo (pendiente de aÃ±adir texto)." },
        { id: 3, subCategoryId: 'sanciones', shortTitle: "SanciÃ³n 1", title: "SanciÃ³n 1", fullTitle: "SanciÃ³n 1", content: "Desarrollo de la primera sanciÃ³n (pendiente de aÃ±adir texto)." },
        { id: 4, subCategoryId: 'sanciones', shortTitle: "SanciÃ³n 2", title: "SanciÃ³n 2", fullTitle: "SanciÃ³n 2", content: "Desarrollo de la segunda sanciÃ³n (pendiente de aÃ±adir texto)." },
      ]
    },
    {
      id: 4,
      title: "Acuerdos internacionales",
      proposals: [
        { 
          id: 1, 
          shortTitle: "Acuerdo de ParÃ­s", 
          title: "El Acuerdo de ParÃ­s y la ConvenciÃ³n Marco de las Naciones Unidas sobre el Cambio ClimÃ¡tico (CMNUCC)", 
          fullTitle: "El Acuerdo de ParÃ­s y la ConvenciÃ³n Marco de las Naciones Unidas sobre el Cambio ClimÃ¡tico (CMNUCC)", 
          imageUrl: "https://lh3.googleusercontent.com/d/1vX76jVTo6WSIZwEfJf13SKNF0E_e6cuB",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                A diferencia de los impactos locales extractivos, el cambio climÃ¡tico es un desafÃ­o global y sistÃ©mico. El <strong>Acuerdo de ParÃ­s</strong> (bajo la CMNUCC) compromete a las naciones a reestructurar sus economÃ­as para mantener el incremento de temperatura por debajo de los <strong>2Â°C (con esfuerzos hacia 1.5Â°C)</strong>, exigiendo a la minerÃ­a ambiciosos planes de descarbonizaciÃ³n.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   AplicaciÃ³n del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">AuditorÃ­a de Emisiones</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Buenaventura ha iniciado la mediciÃ³n meticulosa de su huella de carbono, documentando emisiones directas en flota (Alcance 1) e indirectas de la red interconectada (Alcance 2).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">TransiciÃ³n EnergÃ©tica</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Se destinan cuantiosos recursos de capital para acelerar la electrificaciÃ³n de procesos extractivos/metalÃºrgicos y optimizar el uso de energÃ­a renovable (planta hidroelÃ©ctrica).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Transparencia Financiera (NIIF S2)</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Forzando a modelar escenarios financieros prospectivos donde la volatilidad del precio del carbono y eventos climÃ¡ticos impactan la valoraciÃ³n intrÃ­nseca de los activos.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        { 
          id: 2, 
          shortTitle: "Acuerdo de EscazÃº", 
          title: "El Acuerdo de EscazÃº", 
          fullTitle: "El Acuerdo de EscazÃº", 
          imageUrl: "https://lh3.googleusercontent.com/d/1UnG5ZBSbOSpq9ilSCNubfI4RfezN7D9C",
          content: (
            <div className="flex flex-col gap-6 w-full text-left">
              <p className="text-slate-700 text-lg md:text-xl">
                El <strong>Acuerdo de EscazÃº</strong> representa un hito al entrelazar la doctrina de los derechos humanos con la gobernanza ambiental corporativa. En el contexto de la conflictividad socioambiental peruana, este tratado adquiere una <strong>relevancia estratÃ©gica incalculable</strong> para el modelamiento del riesgo corporativo de la industria extractiva a gran escala.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   AplicaciÃ³n del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Transparencia Extrema</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige la adopciÃ³n de una polÃ­tica incondicional frente al escrutinio civil respecto a la elaboraciÃ³n de lÃ­neas base y publicaciÃ³n irrestricta de Estudios de Impacto Ambiental (EIA).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">ProtecciÃ³n de Defensores</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Instituye mandatos explÃ­citos y sin precedentes para asegurar la protecciÃ³n fÃ­sica y jurÃ­dica de los defensores de los derechos humanos en asuntos ambientales.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Diplomacia Preventiva</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Erradicar asimetrÃ­as de informaciÃ³n tÃ©cnica actÃºa como mecanismo para desactivar bloqueos comunitarios, garantizando viabilidad y certidumbre financiera a largo plazo.</p>
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
                El <strong>Convenio de Basilea</strong> constituye la piedra angular regulatoria para el control exhaustivo y la trazabilidad de movimientos transfronterizos de desechos peligrosos, estableciendo mecanismos estrictos para autorizar el trÃ¡nsito de residuos quÃ­micos complejos, lodos tÃ³xicos y desechos metÃ¡licos.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   AplicaciÃ³n del acuerdo en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">GestiÃ³n de Residuos Especializados</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Impone obligaciones colosales para el manejo logÃ­stico y jurÃ­dico de lodos precipitados, residuos de cianuraciÃ³n y escorias generadas a escala industrial.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">InternalizaciÃ³n de Costos In Situ</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige un tratamiento ambientalmente racional en el origen, asumiendo altos costos en tecnologÃ­a especializada, fletes y pÃ³lizas de seguros de riesgo ambiental.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">PrevenciÃ³n de Arbitraje Regulatorio</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Previene eficazmente que los pasivos tÃ³xicos y voluminosos sean exportados de manera oportunista hacia jurisdicciones con marcos de control ambiental endebles.</p>
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
                El <strong>Convenio de Minamata</strong> es un tratado vinculante (PNUMA) diseÃ±ado para proteger la salud y el ecosistema de las emisiones de mercurio. Regula exhaustivamente todo su ciclo de vida, imponiendo controles estrictos sobre fuentes, redes de comercio y disposiciÃ³n final.
              </p>
              <div className="mt-4 border-t border-slate-200 pt-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#002855] mb-6 flex items-center gap-3">
                   <svg className="w-7 h-7 text-[#EAAA00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                   AplicaciÃ³n del convenio en Minas Buenaventura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Vigilancia Sanitaria Interna</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Exige elevar los estÃ¡ndares corporativos de salud ocupacional frente al riesgo tÃ³xico, protegiendo al personal y mitigando impactos directos en el ecosistema.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">AuditorÃ­a de Cadena de Suministro</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Someterse a auditorÃ­as rigurosas para evitar comercializar oro contaminado, distanciÃ¡ndose claramente de las prÃ¡cticas informales de la minerÃ­a artesanal (MAPE).</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4 text-[#002855]">
                      <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                        <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                      </div>
                      <h4 className="font-bold text-lg leading-tight">Control TecnolÃ³gico de Efluentes</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 leading-snug">Mantener un control exhaustivo en efluentes metalÃºrgicos, garantizando ante organismos internacionales que las trazas de mercurio liberadas se mantengan bajo los lÃ­mites permisibles.</p>
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
    title: "Canales de comunicaciÃ³n",
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
              La contabilidad de costos ambientales revela su verdadero valor al integrarse simbiÃ³ticamente en los sistemas ERP diarios. Se propone la implementaciÃ³n de un <strong>Dashboard Operativo Ambiental interactivo</strong> en las salas de control, diseÃ±ado para monetizar en tiempo real ineficiencias como el consumo excesivo de agua fresca, picos de demanda energÃ©tica y la tasa de generaciÃ³n de residuos.
            </p>
          </div>
        ) 
      },
      { 
        id: 2, 
        shortTitle: "Canal 2", 
        title: "Reportes de Sostenibilidad", 
        fullTitle: "Reportes de Sostenibilidad Corporativa y la DeconstrucciÃ³n de Memorias Integradas", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              Canal institucional que consiste en <strong>deconstruir pedagÃ³gicamente los extensos reportes tÃ©cnicos de sostenibilidad</strong> (presentados ante la SMV) en sesiones plenarias, diseÃ±ando un flujo de informaciÃ³n claro desde la gerencia general hacia los lÃ­deres operativos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">MÃ©tricas y Valor BursÃ¡til</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Demuestra empÃ­ricamente cÃ³mo mÃ©tricas abstractas (huella hÃ­drica ISO 14046 y huella de carbono) afectan directamente la rentabilidad y la percepciÃ³n del mercado sobre la firma.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">"El Tono en la Cima"</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Al distribuir resÃºmenes a todo el personal, la alta gerencia comunica que el Ã©xito corporativo se cuantifica hoy por la eficiencia ecolÃ³gica y no solo por las onzas de mineral extraÃ­das.</p>
              </div>
            </div>
          </div>
        ) 
      },
      { 
        id: 3, 
        shortTitle: "Canal 3", 
        title: "CapacitaciÃ³n NIIF S1 y S2", 
        fullTitle: "Programas de InmersiÃ³n y CapacitaciÃ³n Financiero-Ambiental sobre EstÃ¡ndares NIIF S1 y S2", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              EjecuciÃ³n sistemÃ¡tica de <strong>mÃ³dulos de capacitaciÃ³n interna y talleres interdepartamentales</strong> para explicar las implicancias prÃ¡cticas de las normativas NIIF S1 y NIIF S2, representando un cambio de paradigma en la contabilidad empresarial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Finanzas y Contabilidad</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">ComprensiÃ³n total de que los riesgos climÃ¡ticos (fÃ­sicos como El NiÃ±o, o de transiciÃ³n regulatoria) erosionan irremediablemente el valor intrÃ­nseco de los activos de la empresa.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">AlineaciÃ³n TÃ©cnico-Financiera</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Conectar al personal de geologÃ­a/minas con auditores: demostrar cÃ³mo las infracciones ambientales incrementan el costo de capital y alejan a los inversionistas institucionales (NIIF S2).</p>
              </div>
            </div>
          </div>
        ) 
      },
      { 
        id: 4, 
        shortTitle: "Canal 4", 
        title: "PolÃ­ticas Matrices y Reporte", 
        fullTitle: "PolÃ­ticas Matrices de GestiÃ³n y Flujos de Reporte Directo al directorio general", 
        content: (
          <div className="flex flex-col gap-6 w-full text-left">
            <p className="text-slate-700 text-lg md:text-xl">
              Un flujo de comunicaciÃ³n <strong>estructuralmente ascendente hacia la Alta DirecciÃ³n y el Directorio</strong>. Se activa mediante informes anuales donde auditores y gerentes de sostenibilidad evalÃºan la polÃ­tica ambiental y presentan hallazgos directamente, sin filtros de la gerencia media.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Cultura de RendiciÃ³n de Cuentas</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">El Directorio evalÃºa el cierre de brechas de la matriz de gestiÃ³n ESG y cuestiona directamente a los gerentes de lÃ­nea, asegurando que las controversias se diseccionen al mÃ¡s alto nivel.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4 text-[#002855]">
                  <div className="bg-[#EAAA00]/20 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-[#d49900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h4 className="font-bold text-lg leading-tight">Eficiencia como Dogma</h4>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-snug">Las decisiones derivadas de este escrutinio permean hacia todos los niveles jerÃ¡rquicos como un mandato irrefutable, instaurando la eficiencia ambiental como dogma corporativo innegociable.</p>
              </div>
            </div>
          </div>
        ) 
      }
    ]
  },
  rscContent: {
    title: "Importancia de la Responsabilidad Social Corporativa (RSC)",
    intro: "La Responsabilidad Social Corporativa no es solo un compromiso Ã©tico, sino una estrategia fundamental para el desarrollo sostenible de nuestra organizaciÃ³n. A travÃ©s de la RSC, generamos valor compartido: protegemos el medio ambiente, promovemos el bienestar de las comunidades locales y garantizamos la viabilidad de nuestras operaciones mineras a largo plazo. Integrar prÃ¡cticas sostenibles nos permite mitigar riesgos, optimizar recursos y fortalecer la confianza con todos nuestros grupos de interÃ©s.",
    modules: [
      {
        id: 1,
        title: "Transparencia Radical de Riesgos y la AdopciÃ³n Obligatoria de las Normas Internacionales NIIF S1 y S2",
        description: "La implementaciÃ³n de las normas NIIF S1 y S2 establece un marco integral para la divulgaciÃ³n de riesgos de sostenibilidad y cambio climÃ¡tico.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">ðŸŽ¯ Marco Normativo HistÃ³rico</p>
              <p className="text-slate-700">El 18 de marzo de 2026, el Consejo Normativo de Contabilidad (CNC) de PerÃº aprobÃ³ oficialmente las normas NIIF S1 y NIIF S2, convergiendo con estÃ¡ndares globales emitidos por el Consejo de Normas Internacionales de Sostenibilidad (ISSB).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#002855] mb-3 flex items-center gap-2">
                  <span className="text-xl">ðŸ“Š</span> NIIF S1
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">Asuntos de sostenibilidad materiales inherentes al modelo de negocio e impacto en flujos de efectivo presentes y proyectados.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-[#002855] mb-3 flex items-center gap-2">
                  <span className="text-xl">ðŸŒ¡ï¸</span> NIIF S2
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">Riesgos climÃ¡ticos fÃ­sicos y de transiciÃ³n que afectan la viabilidad a largo plazo de la estrategia corporativa.</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#002855]">âš ï¸ PrevenciÃ³n del Greenwashing</h4>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">âœ“</span>
                  <p className="text-slate-700"><strong>RevelaciÃ³n Estandarizada:</strong> InformaciÃ³n homogÃ©nea y comparable que permite anÃ¡lisis real del desempeÃ±o ambiental.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">âœ“</span>
                  <p className="text-slate-700"><strong>Castigo Normativo:</strong> Sanciones severas por incumplimiento o fraude en reportes de sostenibilidad.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#EAAA00] font-bold text-lg">âœ“</span>
                  <p className="text-slate-700"><strong>Decisiones Fundadas:</strong> Inversionistas disponen de informaciÃ³n para asignaciÃ³n eficiente de capital.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> La adopciÃ³n obligatoria de NIIF S1 y S2 cierra el vacÃ­o histÃ³rico entre el desempeÃ±o ambiental real y la informaciÃ³n financiera reportada, permitiendo una transiciÃ³n ordenada hacia neutralidad climÃ¡tica e inversiÃ³n responsable.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 2,
        title: "Exactitud Forense en el Reconocimiento Contable de Provisiones y Pasivos Contingentes (Enfoque NIC 37)",
        description: "La precisiÃ³n en la valorizaciÃ³n de provisiones bajo NIC 37 asegura que todos los pasivos potenciales sean contabilizados con exactitud cientÃ­fica.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">ðŸ”¬ Enfoque Forense: De la Etapa Inicial al Post-Cierre</p>
              <p className="text-slate-700 text-sm">La verdadera RSE implica contabilizar desde el primer dÃ­a de operaciÃ³n el ciclo completo de vida del activo minero: prospecciÃ³n, explotaciÃ³n, remediaciÃ³n y cierre perpetuo.</p>
            </div>

            <div className="bg-white border-2 border-slate-200 p-6 rounded-xl">
              <h4 className="font-bold text-[#002855] mb-4">ðŸ“‹ Componentes Clave de Provisiones (NIC 37):</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Cierre de Instalaciones</p>
                  <p className="text-xs text-slate-700">Desmantelamiento, estabilizaciÃ³n y sellado permanente de operaciones mineras.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">RemediaciÃ³n de Tierras</p>
                  <p className="text-xs text-slate-700">RecuperaciÃ³n y restauraciÃ³n ecolÃ³gica de zonas impactadas por actividad extractiva.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Tratamiento de Efluentes</p>
                  <p className="text-xs text-slate-700">GestiÃ³n perpetua de drenaje Ã¡cido y aguas residuales post-cierre.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                  <p className="font-semibold text-[#002855] mb-2">Monitoreo Ambiental</p>
                  <p className="text-xs text-slate-700">Vigilancia a largo plazo de calidad de suelos, aguas y ecosistemas.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[#002855]">âš™ï¸ MetodologÃ­a Rigurosa de CÃ¡lculo</h4>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">1</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">EstimaciÃ³n TÃ©cnica Ã“ptima</p>
                  <p className="text-sm text-slate-600">Costos de ingenierÃ­a civil, movimiento de tierras, tratamiento quÃ­mico basados en data histÃ³rica y estÃ¡ndares internacionales.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">2</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Tasa de Descuento Rigurosa</p>
                  <p className="text-sm text-slate-600">Refleja el costo de oportunidad del dinero, riesgos especÃ­ficos, inflacionarios y cambiarios inherentes.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-xl">
                <div className="min-w-fit">
                  <div className="bg-[#002855] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm">3</div>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Valor Presente Contabilizado</p>
                  <p className="text-sm text-slate-600">Pasivos descontados matemÃ¡ticamente para reflejar el costo real actual de obligaciones futuras.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <p className="font-bold text-[#002855] mb-2">âš ï¸ Riesgo de Contabilidad Miope</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Subestimar el costo de neutralizaciÃ³n (ej. drenaje Ã¡cido a perpetuidad) infla artificialmente las utilidades presentes pero sacrifica irreparablemente la solvencia futura y expone a la corporaciÃ³n a litigios, multas OEFA y quiebra tÃ©cnica.
              </p>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> Una contabilidad tÃ©cnica, conservadora y precisa bajo NIC 37 blinda el patrimonio corporativo, garantiza equidad intergeneracional y reduce sorpresas regulatorias adversas.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 3,
        title: "ReducciÃ³n MatemÃ¡tica del Costo Promedio Ponderado de Capital (WACC) y AtracciÃ³n de Financiamiento",
        description: "La implementaciÃ³n de prÃ¡cticas RSC reduce el WACC al disminuir el riesgo percibido, generando un menor costo de capital.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">ðŸ’° Materialidad Financiera del Riesgo ESG</p>
              <p className="text-slate-700 text-sm">Los billones de dÃ³lares gestionados por inversionistas institucionales globales, fondos soberanos de pensiones y banca multilateral exigen mÃ©tricas ESG auditadas como precondiciÃ³n para cualquier Due Diligence.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-[#002855] mb-3">ðŸ“ˆ WACC Reducido</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Menor riesgo crediticio</strong></p>
                  <p className="text-slate-600">Mejores ratings de deuda corporativa</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-[#002855] mb-3">ðŸŽ¯ VPN Incrementado</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Mayor viabilidad</strong></p>
                  <p className="text-slate-600">Proyectos de inversiÃ³n financieramente atractivos</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h4 className="font-bold text-[#002855] mb-3">ðŸ’Ž Capital Fresco</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700"><strong>Tasas competitivas</strong></p>
                  <p className="text-slate-600">Acceso a financiamiento innovador y subsidiado</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#002855]">ðŸ¦ Instrumentos de Financiamiento Innovadores</h4>
              
              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">ðŸŸ¢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">LÃ­neas de CrÃ©dito de TransiciÃ³n ClimÃ¡tica</p>
                    <p className="text-sm text-slate-700">Tasas de interÃ©s preferenciales para proyectos de descarbonizaciÃ³n y adaptaciÃ³n climÃ¡tica.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">ðŸŸ¢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">Bonos Verdes (Green Bonds)</p>
                    <p className="text-sm text-slate-700">EmisiÃ³n etiquetada para financiar proyectos ambientales con demanda global creciente.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#EAAA00] p-6 rounded-xl">
                <div className="flex gap-4 items-start">
                  <span className="text-3xl">ðŸŸ¢</span>
                  <div className="flex-1">
                    <p className="font-bold text-[#002855] mb-1">Sustainability-Linked Bonds</p>
                    <p className="text-sm text-slate-700">Tasas indexadas a cumplimiento de metas ESG predefinidas, incentivando desempeÃ±o sostenible.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#002855] to-[#1a3a6a] text-white p-8 rounded-xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">â™»ï¸</span> El CÃ­rculo Virtuoso de la Sostenibilidad
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div className="text-center">
                  <p className="font-bold mb-1">Menores Costos</p>
                  <p>WACC reducido</p>
                </div>
                <div className="text-lg">â†’</div>
                <div className="text-center">
                  <p className="font-bold mb-1">ReinversiÃ³n</p>
                  <p>TecnologÃ­as limpias</p>
                </div>
                <div className="text-lg">â†’</div>
                <div className="text-center">
                  <p className="font-bold mb-1">Mejora ESG</p>
                  <p>Indicadores superiores</p>
                </div>
                <div className="text-lg">â†’</div>
                <div className="text-center">
                  <p className="font-bold mb-1">MÃ¡s Capital</p>
                  <p>Acceso global</p>
                </div>
              </div>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> El impacto de la RSE en calidad financiera es medible y directo: reducciÃ³n del WACC incrementa VPN, mejora mÃ¡rgenes operativos y retorno sobre inversiÃ³n, atrayendo capital institucional global.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 4,
        title: "PreservaciÃ³n EstratÃ©gica de la Continuidad Operativa y GestiÃ³n Integral de Crisis Corporativas",
        description: "La gestiÃ³n proactiva de crisis mediante RSC garantiza la continuidad operativa ante eventos adversos.",
        content: (
          <div className="flex flex-col gap-8 w-full text-left">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="text-slate-800 font-semibold mb-2">âš¡ La InformaciÃ³n Financiera Refleja la OperaciÃ³n</p>
              <p className="text-slate-700 text-sm">Los nÃºmeros en estados financieros son la proyecciÃ³n numÃ©rica del desempeÃ±o operativo subyacente. Nada destruye proyecciones financieras mÃ¡s rÃ¡pido que interrupciones operativas imprevistas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg">
                <h4 className="font-bold text-red-700 mb-3">âš ï¸ Riesgo Supremo</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">â€¢ Bloqueos de acceso logÃ­stico</p>
                  <p className="text-slate-700">â€¢ Paros laborales y conflictividad social</p>
                  <p className="text-slate-700">â€¢ PÃ©rdida de licencia social</p>
                  <p className="text-slate-700">â€¢ InterrupciÃ³n inmediata de generaciÃ³n de caja</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
                <h4 className="font-bold text-green-700 mb-3">âœ… Respuesta RSC</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-700">â€¢ Plataformas de diÃ¡logo preventivo</p>
                  <p className="text-slate-700">â€¢ GestiÃ³n transparente de recursos crÃ­ticos</p>
                  <p className="text-slate-700">â€¢ InversiÃ³n en relaciones comunitarias</p>
                  <p className="text-slate-700">â€¢ MantenciÃ³n de licencia social</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[#002855]">ðŸ›¡ï¸ Cinco Pilares de Resiliencia Operativa</h4>
              
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                <span className="text-3xl font-bold text-blue-500 flex-shrink-0">1</span>
                <div>
                  <p className="font-bold text-[#002855]">IdentificaciÃ³n Temprana de Riesgos SistÃ©micos</p>
                  <p className="text-sm text-slate-700">Mapeo prospectivo de amenazas ambientales, regulatorias y comunitarias.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-purple-500">
                <span className="text-3xl font-bold text-purple-500 flex-shrink-0">2</span>
                <div>
                  <p className="font-bold text-[#002855]">DiversificaciÃ³n de Cadenas de Suministro</p>
                  <p className="text-sm text-slate-700">Redundancia logÃ­stica para mitigar interrupciones puntuales.</p>
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
                  <p className="text-sm text-slate-700">DiÃ¡logo permanente con autoridades locales y grupos de interÃ©s.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-indigo-500">
                <span className="text-3xl font-bold text-indigo-500 flex-shrink-0">5</span>
                <div>
                  <p className="font-bold text-[#002855]">Cobertura de Seguros Integral</p>
                  <p className="text-sm text-slate-700">ProtecciÃ³n contra eventos ambientales, sociales y operativos catastrÃ³ficos.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#002855]/10 to-[#EAAA00]/10 border border-[#002855]/20 p-6 rounded-xl">
              <h4 className="font-bold text-[#002855] mb-4">ðŸ“Š Beneficios Financieros de la Resiliencia</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex gap-2">
                  <span className="text-lg">âœ“</span>
                  <p className="text-sm text-slate-700"><strong>Menor volatilidad:</strong> Flujos de caja predecibles y estables</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">âœ“</span>
                  <p className="text-sm text-slate-700"><strong>ProtecciÃ³n patrimonial:</strong> MitigaciÃ³n de pÃ©rdidas por lucro cesante</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">âœ“</span>
                  <p className="text-sm text-slate-700"><strong>Viabilidad a largo plazo:</strong> Operaciones sostenibles en tiempo</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-lg">âœ“</span>
                  <p className="text-sm text-slate-700"><strong>Proyecciones fiables:</strong> Inversionistas pueden modelar con confianza</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <p className="font-bold text-[#002855] mb-3">ðŸŽ¯ Caso de Estudio: Lecciones de Julcani y Orcopampa</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Los bloqueos logÃ­sticos en unidades mineras de Buenaventura ejemplifican cÃ³mo el rechazo comunitario genera inestabilidad polÃ­tica, operativa y financiera inmediata. La materializaciÃ³n de conflictividad social causa evaporaciÃ³n catastrÃ³fica de generaciÃ³n de caja, demostrando que la RSE no es un costo sino una inversiÃ³n en seguro operativo.
              </p>
            </div>

            <div className="bg-[#002855]/5 border border-[#002855]/20 p-6 rounded-lg">
              <p className="text-slate-800 text-sm leading-relaxed">
                <strong className="text-[#002855]">Resultado clave:</strong> La RSE actuÃ¡ como la cobertura de seguros corporativa mÃ¡s robusta, econÃ³mica y efectiva contra interrupciones operativas, garantizando continuidad de flujos de ingresos y predicciÃ³n confiable para inversionistas a largo plazo.
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
  const [showImage, setShowImage] = useState(false);

  const goToModules = () => {
    setShowImage(false);
    setActiveSubCategoryId(null);
    setCurrentView('modules');
  };
  
  const goToCover = () => {
    setActiveModuleId(null);
    setActiveProposalId(null);
    setActiveChannelId(null);
    setActiveSubCategoryId(null);
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
            CompaÃ±Ã­a de Minas Buenaventura<br />S.A.
          </h1>
          
          <button 
            onClick={goToModules} 
            className="bg-[#031024] hover:bg-[#0a1e40] text-white py-4 px-10 rounded-full text-xl md:text-2xl font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3"
          >
            GestiÃ³n Ambiental
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    );
  }

  // 2. Vista de MÃ³dulos
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
            <span className="text-2xl font-bold uppercase tracking-wide">Importancia de la RSC</span>
            <span className="text-sm font-medium opacity-80">Conoce nuestro compromiso con la sostenibilidad y la comunidad</span>
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

  // 3. Vista Detalle del MÃ³dulo
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
                Volver a MÃ³dulos
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

              {/* CAJÃ“N EXTRA PARA "CANALES DE COMUNICACIÃ“N" (Solo en MÃ³dulo 2) */}
              {activeModule.id === 2 && (
                <button
                  onClick={goToChannels}
                  className="md:col-span-2 bg-[#EAAA00] hover:bg-[#d49900] rounded-3xl py-10 px-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center mt-2"
                >
                  <span className="text-xl md:text-2xl font-bold text-[#002855] uppercase tracking-wide">
                    Canales de ComunicaciÃ³n
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
      <div className="min-h-screen bg-slate-50 flex flex-col items-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-7xl flex flex-col gap-6 mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch justify-end">
            <button 
              onClick={() => setCurrentView('module-detail')}
              className="bg-white border border-slate-200 text-[#002855] rounded-xl py-3 px-8 hover:bg-[#002855] hover:text-white transition-all shadow-sm font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Volver al MÃ³dulo
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
                       <OptimizedImage src={activeProposal.imageUrl} alt={activeProposal.title} className="w-full h-full object-contain rounded-xl" />
                     ) : (
                       <>
                         <svg className="w-16 h-16 text-slate-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                         <span className="absolute bottom-4 text-slate-500 font-medium">Ãrea para Imagen</span>
                       </>
                     )}
                  </div>
                  <p className="mt-6 text-slate-600 text-center italic mb-6">
                    RepresentaciÃ³n visual de: {activeProposal.title}
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
                    {activeModule.id === 4 ? "Objetivo del acuerdo" : "Desarrollo de la propuesta"}
                  </h2>
                  <div className="flex-1 flex items-start text-lg md:text-xl text-slate-600 leading-relaxed w-full">
                    {activeProposal.content}
                  </div>
                  <div className="mt-8 flex justify-start w-full">
                    <button 
                      onClick={() => setShowImage(true)}
                      className="bg-[#002855]/5 hover:bg-[#002855]/10 text-[#002855] py-3 px-6 rounded-xl font-semibold transition-colors flex items-center gap-2 border border-[#002855]/20"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {activeModule.id === 4 ? "Ver imagen del acuerdo" : "Ver imagen de la propuesta"}
                    </button>
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
    );
  }

  // 5. Vista General de Canales de ComunicaciÃ³n
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
                DescripciÃ³n del canal
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

  // 7. Vista de Importancia de la RSC
  if (currentView === 'rsc') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
        <div className="w-full max-w-6xl flex flex-col gap-8">
          
          {/* Encabezado */}
          <div className="bg-[#002855] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center border border-slate-700">
            <div className="absolute top-0 left-0 w-full h-3 bg-[#EAAA00]"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#EAAA00]/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <svg className="w-14 h-14 text-[#EAAA00] mb-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 leading-tight">
              {reportData.rscContent.title}
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 relative z-10 shadow-inner">
              <p className="text-base md:text-lg text-slate-200 leading-relaxed font-light">
                {reportData.rscContent.intro}
              </p>
            </div>
          </div>

          {/* Grid de MÃ³dulos */}
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
                    <span>Ver mÃ¡s detalles</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vista de Detalle del MÃ³dulo */}
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

          {/* BotÃ³n de Regreso */}
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

          {/* Simulated Dashboard UI */}
          <div className="w-full bg-[#031024] rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#EAAA00]/5 rounded-full blur-3xl"></div>
             
             <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-4">
               <div>
                 <h3 className="text-white text-xl font-bold">Dashboard Ambiental en Tiempo Real</h3>
                 <p className="text-slate-400 text-sm">Actualizado: hace 2 segundos | OperaciÃ³n: Orcopampa</p>
               </div>
               <div className="flex items-center gap-2">
                 <span className="flex h-3 w-3 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                 </span>
                 <span className="text-red-400 font-mono text-sm">Alerta Activa</span>
               </div>
             </div>

             {/* Metrics Row */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                {/* Metric 1 - Alert */}
                <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-6 shadow-inner">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-red-200 text-sm font-medium">Fuga en Bombeo de Relaves</p>
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  </div>
                  <h4 className="text-3xl font-mono font-bold text-red-500 mb-1">-$4,250 <span className="text-lg">/ dÃ­a</span></h4>
                  <p className="text-red-400/80 text-xs">PÃ©rdida patrimonial acumulada + Riesgo de multa OEFA</p>
                </div>

                {/* Metric 2 - Warning */}
                <div className="bg-yellow-950/30 border border-yellow-500/30 rounded-2xl p-6 shadow-inner">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-yellow-200 text-sm font-medium">Pico Demanda EnergÃ©tica</p>
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h4 className="text-3xl font-mono font-bold text-yellow-500 mb-1">14.2 <span className="text-lg">MW</span></h4>
                  <p className="text-yellow-400/80 text-xs">+12% sobre el lÃ­mite de tarifa estÃ¡ndar</p>
                </div>

                {/* Metric 3 - Normal */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-slate-300 text-sm font-medium">Agua Fresca Consumida</p>
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="text-3xl font-mono font-bold text-white mb-1">845 <span className="text-lg">mÂ³</span></h4>
                  <p className="text-slate-400 text-xs">Dentro del rango Ã³ptimo operativo</p>
                </div>
             </div>
          </div>

          {/* Cards explicativas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-red-500 hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-4 text-[#002855]">
                <div className="bg-red-50 p-2 rounded-lg text-red-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h4 className="font-bold text-xl leading-tight">SensibilizaciÃ³n Inmediata</h4>
              </div>
              <p className="text-base text-slate-600 leading-snug">
                Cuando un operador observa que un desperfecto mecÃ¡nico equivale a una <strong>pÃ©rdida patrimonial cuantificada en dÃ³lares</strong> y al incremento del riesgo de multas punitivas, el impacto es directo e instantÃ¡neo.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-md border-l-4 border-[#002855] hover:-translate-y-1 transition-transform">
              <div className="flex items-center gap-3 mb-4 text-[#002855]">
                <div className="bg-[#EAAA00]/20 p-2 rounded-lg text-[#d49900]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <h4 className="font-bold text-xl leading-tight">PsicologÃ­a Conductual</h4>
              </div>
              <p className="text-base text-slate-600 leading-snug">
                Demostrar el impacto monetario exacto del desempeÃ±o ambiental frente a los ojos del personal <strong>altera inmediatamente los incentivos del comportamiento</strong>, fomentando una cultura de prevenciÃ³n activa.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
}
