import { Table } from 'react-bootstrap';

const Scheduled = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Table striped bordered hover style={{ fontSize: '1rem', padding: '1rem' }}>
            <tbody>
                <tr>
                    <th rowSpan={3} style={{ backgroundColor: 'white', padding: '2rem' }}>Semana 1</th>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center", padding: '0rem 2rem'  }}>Lunes</td>
                    <td style={{ backgroundColor: 'transparent', textAlign:"center" }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white',textAlign:"center" }}>Bienvenida al curso y configuración inicial</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Repaso de conceptos básicos del desarrollo web</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Primer proyecto práctico: Construcción de una página web básica.</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}> Miércoles</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Revisión avanzada de HTML y CSS.
                    </td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Incrementando tu dominio de JavaScript.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Mejores Prácticas en Desarrollo Web</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white' ,height: '50px', textAlign:"center"  }}>Viernes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Revisión frameworks y librerías: React, Angular, Vue.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Ejercicios prácticos </td>
                </tr>
                <br/>
                <tr>
                    <th rowSpan={3} style={{ backgroundColor: 'white' }}>Semana 2</th>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Lunes</td>
                    <td style={{ backgroundColor: 'transparent', width:"10px" }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Tipos de entrevistas técnicas y expectativas en desarrollo web.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Estrategias para responder preguntas de comportamiento (STAR Method).</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Prácticas de entrevistas de comportamiento</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Miércoles</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Importancia de las estructuras de datos en entrevistas técnicas.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Listas, pilas y colas.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Algoritmos de búsqueda y ordenación</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Viernes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Árboles y grafos.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Algoritmos avanzados.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Taller de codificación en vivo.</td>
                </tr>
                <br/>
                <tr>
                    <th rowSpan={3} style={{ backgroundColor: 'white' }}>Semana 3</th>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Lunes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Seleccionando proyectos relevantes para desarrollo web</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Creación de un portafolio.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Optimización del portafolio para entrevistas técnicas.</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Miércoles</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Introducción a retos técnicos</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Estrategias para abordar problemas de codificación en desarrollo web</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Práctica de problemas de nivel básico a intermedio en JavaScript.</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Viernes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Estrategias avanzadas de resolución de problemas.</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Práctica de problemas de nivel intermedio a avanzado en frameworks (React, Angular).</td>
                    <td style={{ backgroundColor: 'white', textAlign:"center" }}>Taller de codificación en vivo.</td>
                </tr>
                <br/>
                <tr>
                    <th rowSpan={3} style={{ backgroundColor: 'white' }}>Semana 4</th>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Lunes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Taller de creación de CV: Sección por sección.</td>
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Optimizando tu perfil de LinkedIn.</td>
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Revisión y feedback de CV y perfiles de LinkedIn..</td>

                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Miércoles</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Simulación de entrevistas técnicas en desarrollo web.</td>
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Feedback y áreas de mejora.</td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: 'white', height: '50px', textAlign:"center"  }}>Viernes</td>
                    <td style={{ backgroundColor: 'transparent' }}></td> {/* Columna vacía */}
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Revisión general y lecciones aprendidas.</td>
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Estrategias para el éxito continuo en la carrera de desarrollo web.</td>
                    <td style={{ backgroundColor: 'white',  textAlign:"center" }}>Recursos adicionales y próximos pasos.</td>
                </tr>
            </tbody>
        </Table>

        </div>

    );
}

export default Scheduled;