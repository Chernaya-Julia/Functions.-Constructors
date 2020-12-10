const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
  };
  
  const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
  };

  const fines = {
    booze: 50,
    late: 10,
    lazy: 30,
  };
  
  const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
  };
  
  const cntTasksToUpgrade = 5;

  function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.totaltasks = 0;

    this.addTask = () => {
      this.tasks++;
    };
  
    
    this.upgrade = () => {
      // Проверка количества завершенных задач
      if (this.totaltasks >= cntTasksToUpgrade) {
        
        switch (this.grade) {
            case grades.Junior: this.grade = grades.Middle; break; 
            case grades.Middle: this.grade = grades.Senior; break;
        }
        // Сбрасываем после апгрейда левела
        this.totaltasks -= cntTasksToUpgrade;
        console.log('Upgrade прошел');
      } else {
        console.log('Недостаточно задач для Upgrade');
      }
    }
    
    this.finishTask = () => {
      if (this.tasks > 0) {
        this.tasks--;
        this.totaltasks++;
        this.salary +=
          (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }

      
    }

    this.fine = (fineType) => {
        this.salary -= fines[fineType];
    } 
  }
  
  const user = new User('John', 'C++', grades.Junior);
  const user1 = new User('Vasya', 'Rust', grades.Senior);
  const user2 = new User('Nifertiti', 'Bu', grades.Middle);
  
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  user.addTask();
  
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();
  user.finishTask();

  user.upgrade();
  console.log(user);
  user.fine('lazy');

  console.log(user);