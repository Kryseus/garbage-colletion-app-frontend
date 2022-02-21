{this.props.garbageSchedule?.colors?.map(color => {
    const shouldBeColored = color.dates.find(day => day === `${day}`) ? 'yes' : 'no';
    return (
      <div>
        {color.name} | {shouldBeColored}
      </div>
    )
  })}