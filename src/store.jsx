        <div className="roller-grid">
          {categories.map((c) => (
            <div className="roller-card" key={c.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <img src={c.img} alt={c.title} />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <p className="roller-card-title ">{c.title}</p>
                <p className="LightFont" >{c.count} products</p>
              </div>

            </div>
          ))}
        </div>