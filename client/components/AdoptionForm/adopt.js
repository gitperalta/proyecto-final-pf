const copy = () => {
  return (
    <>
      <span className={styles.title}>Datos de la Mascota</span>
      <label htmlFor="name" className={styles.stretch}>
        Nombre:
        <span className={styles.errors}>{errors.name}</span>
        <input
          className={styles.input}
          id="name"
          type="text"
          name="name"
          placeholder=" Ingrese el nombre de la mascota..."
          onChange={(e) => {
            validation(e);
            handleSelector(e);
          }}
        />
      </label>
      <label htmlFor="size" className={styles.stretch}>
        Tamaño:
        <span className={styles.errors}>{errors.size}</span>
        <div className={styles.radio}>
          <label htmlFor="pequeño">
            <input
              type="radio"
              id="pequeño"
              value="pequeño"
              name="size"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Pequeño
          </label>
          <label htmlFor="mediano">
            <input
              type="radio"
              id="mediano"
              value="mediano"
              name="size"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Mediano
          </label>
          <label htmlFor="grande">
            <input
              type="radio"
              id="grande"
              value="grande"
              name="size"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Grande
          </label>
        </div>
      </label>
      <label htmlFor="age" className={styles.stretch}>
        Edad:
        <span className={styles.errors}>{errors.age}</span>
        <select
          name="age"
          id="age"
          className={styles.input}
          onChange={(e) => {
            validation(e);
            handleSelector(e);
          }}
        >
          <option defaultValue={true} value="">
            Ingrese la edad de la mascota...
          </option>
          {ages.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="type" className={styles.stretch}>
        Especie:
        <span className={styles.errors}>{errors.type}</span>
        <select
          className={styles.input}
          id="type"
          name="type"
          onChange={(e) => {
            validation(e);
            handleSelector(e);
          }}
        >
          <option defaultValue={true} value="select">
            Seleccione la especie de la mascota...
          </option>
          <option value="ave">Ave</option>
          <option value="conejo">Conejo</option>
          <option value="gato">Gato</option>
          <option value="hamster">Hamster</option>
          <option value="perro">Perro</option>
          <option value="pez">Pez</option>
          <option value="tortuga">Tortuga</option>
          <option value="otra">otra</option>
        </select>
      </label>

      <label htmlFor="health" className={styles.health}>
        Salud
        {/* <span className={styles.errors}>{errors.health}</span> */}
        <div className={styles.radio}>
          <label classNamee={styles.label} htmlFor="good">
            <input
              classNamee={styles.input}
              type="radio"
              value="buena"
              id="good"
              name="health"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Buena
          </label>
          <div className={styles.check}></div>
          <label classNamee={styles.label} htmlFor="needy">
            <input
              classNamee={styles.input}
              type="radio"
              value="necesita atención"
              id="needy"
              name="health"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Necesita atención
          </label>
          <div className={styles.check}></div>
          <label classNamee={styles.label} htmlFor="unknown">
            <input
              classNamee={styles.input}
              type="radio"
              value="desconocida"
              id="unknown"
              name="health"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Desconozco
          </label>
          <div className={styles.check}></div>
        </div>
      </label>

      <label htmlFor="condition" className={styles.condition}>
        Condición
        <div className={styles.radio}>
          <label htmlFor="pregnant">
            <input
              type="radio"
              value="embarazada"
              id="pregnant"
              name="condition"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Embarazada
          </label>
          <label htmlFor="castrated">
            <input
              type="radio"
              value="castrado/a"
              id="castrated"
              name="condition"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Castrado/a
          </label>
          <label htmlFor="_unknown">
            <input
              type="radio"
              value="desconocida"
              id="_unknown"
              name="condition"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Desconozco
          </label>
        </div>
      </label>

      <label htmlFor="sociability" className={styles.sociability}>
        ¿Cómo es su interacción con otros animales?
        <div className={styles.radio}>
          <label htmlFor="_good">
            <input
              type="radio"
              value="buena"
              id="_good"
              name="sociability"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Buena
          </label>
          <label htmlFor="normal">
            <input
              type="radio"
              value="normal"
              id="normal"
              name="sociability"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Normal
          </label>
          <label htmlFor="bad">
            <input
              type="radio"
              value="mala"
              id="bad"
              name="sociability"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Mala
          </label>
          <label htmlFor="__unknown">
            <input
              type="radio"
              value="desconocida"
              id="__unknown"
              name="sociability"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Desconozco
          </label>
        </div>
      </label>

      <label className={styles.stretch}>
        Ubicación:
        <label htmlFor="provincia" className={styles.stretch}>
          <span className={styles.title}>Provincia</span>
          <span className={styles.errors}>{errors.provincia}</span>
          <select
            className={styles.input}
            name="provincia"
            id="provincia"
            onChange={(e) => {
              validation(e);
              handleProvincia(e);
            }}
          >
            <option defaultValue={true} value="select">
              Seleccione provincia
            </option>
            {provi?.map((el) => (
              <option key={el.nombre} value={el.nombre}>
                {el.nombre}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="ciudad" className={styles.stretch}>
          <span className={styles.title}>Ciudad</span>
          <span className={styles.errors}>{errors.ciudad}</span>
          <select
            className={styles.input}
            id="ciudad"
            name="ciudad"
            onChange={(e) => {
              validation(e);
              handleCiudad(e);
            }}
          >
            <option defaultValue={true} value="select">
              Seleccione ciudad
            </option>

            {munici?.map((el) => (
              <option key={el.nombre} value={el.nombre}>
                {el.nombre}
              </option>
            ))}
          </select>
        </label>
      </label>
      <label htmlFor="gender" className={styles.stretch}>
        Genero:
        <span className={styles.errors}>{errors.gender}</span>
        <div className={styles.radio}>
          <label htmlFor="macho">
            <input
              type="radio"
              value="macho"
              id="macho"
              name="gender"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Macho
          </label>
          <label htmlFor="hembra">
            <input
              type="radio"
              value="hembra"
              id="hembra"
              name="gender"
              onChange={(e) => {
                validation(e);
                handleSelector(e);
              }}
            />
            Hembra
          </label>
        </div>
      </label>

      <label htmlFor="description" className={styles.stretch}>
        Descripción:
        <span className={styles.errors}>{errors.description}</span>
        <textarea
          className={styles.input}
          id="description"
          type="text"
          name="description"
          rows="3"
          placeholder=" Describa a la mascota..."
          onChange={(e) => {
            validation(e);
            handleSelector(e);
          }}
        />
      </label>

      <label htmlFor="image" className={styles.stretch}>
        Imagen:
        <span className={styles.errors}>{errors.image}</span>
        <input
          id="image"
          type="file"
          name="image"
          onChange={(e) => {
            validation(e);
            handleFiles(e);
          }}
        />
      </label>
      {/* <label htmlFor="email">
                Email de confirmación de publicación
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese el email..."
                onChange={(e) => handleSelector(e)}
              /> */}
      <label htmlFor="submit">
        <input
          id="submit"
          type="submit"
          value="Subir Mascota"
          disabled={
            !post.age ||
            !post.name ||
            !post.description ||
            !post.location.provincia ||
            !post.image ||
            !post.size ||
            !post.gender ||
            !post.type ||
            !post.location.municipio ||
            ///////////////////////////////////////////////////
            errors.name !== null ||
            errors.age !== null ||
            errors.description !== null ||
            errors.size !== null ||
            errors.gender !== null ||
            errors.ciudad !== null ||
            errors.provincia !== null ||
            errors.type !== null ||
            errors.image !== null ||
            errors.health !== null ||
            errors.sociability !== null ||
            errors.condition !== null
          }
        />
      </label>
    </>
  );
};