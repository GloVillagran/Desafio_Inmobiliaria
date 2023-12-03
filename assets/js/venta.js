import propiedadesVenta from './data/propiedades_Venta.js';


const verPropiedades = (propiedades, containerId) => {
    const container = document.getElementById(containerId)


    propiedades.forEach((propiedad) => {
        const card = document.createElement('div')
        card.className = 'col-md-4 mb-4'

        const cardTemplete = `
            <div class="card">
                <img
                    src="${propiedad.src}"
                    class="card-img-top"
                    alt="${propiedad.nombre}"
                />
                <div class="card-body">
                    <h5 class="card-title"> ${propiedad.nombre}
                    </h5>
                    <p class="card-text"> ${propiedad.descripcion}
                    </p>
                    <p > 
                        <i class="fas fa-map-marker-alt"> </i>
                        ${propiedad.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${propiedad.habitaciones}
                        <i class="fas fa-bath"></i> ${propiedad.baños}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("USD")}</p>
                    
                    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${propiedad.smoke ? 'fa-solid fa-joint': 'fa-solid fa-ban-smoking'}"></i>
                        ${propiedad.smoke ? 'Permitido Fumar' : 'No se permite fumar'}
                    </p>
                    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                        <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-solid fa-ban'}"></i> 
                        ${propiedad.pets ? 'Mascotas Permitidas' : 'No se permiten mascotas'}
                    </p>
                </div>
            </div> 
            `;
        card.innerHTML = cardTemplete;
        container.appendChild(card)

    });
}

verPropiedades(propiedadesVenta, 'propiedadesVentaContainer');