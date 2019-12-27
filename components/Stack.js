export default ({ children, space = 20 }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        display: grid;
        grid-row-gap: ${space}px;
      }
    `}</style>
  </div>
)