type userType = {
  age: number;
  username :string,
  password:string,
  email:string,
  metadata:any,
  type:string,
  isActive:boolean,
  isAdmin:boolean,
  hasPermissions:boolean
}

export class User{
  private user: userType;
  
  constructor(user: userType) {
    this.user = user;
  }

  get(_link:string){
    return 'data'
  }

     register(user: userType) {
      let inputData = null;
      let url = "/metadata";
      if (url === null) {
        return "URL not found";
      }
      if (url === "") {
        return "URL is empty";
      }
      const data = this.get(url);
      if (!data) {
        return "No data found";
      }
      if (data === "") {
        return "Data is empty";
      }
      if (data.length < 5) {
        return "Input too short";
      }
      user.metadata = inputData;
    }

      ValidationOfUser(user:userType)
      {
        let status = "SUCCESS";
        if (user === null) {
          status = "INVALID_USER";
        }
        if (user.username.length >= 3) {
          status = "INVALID_USERNAME";
        }
        if (user.password.length >= 8) {
          status = "INVALID_PASSWORD";
        }
        if (user.email.indexOf("@") === -1) {
          status = "INVALID_EMAIL";
        }
        if (user.age < 18) {
          status = "AGE_NOT_ACCEPTED";
        }
        return status;
      }
      
      authenticate(username:string,password:string){
        if(this.user.username === username && this.user.password === password){
          return true
        }
      }  


    login(username: string, password: string) {
      let loggedIn = false;
    
      if (
        username !== null &&
        password !== null &&
        username.length >= 3 &&
        password.length >= 6
      ) {
        if (this.authenticate(username, password) === true) {
          loggedIn = true;
        }
      }
      return loggedIn;
    }
 
    
    canUserAccess(user:userType) {
      return user && user.isActive && user.isAdmin && user.hasPermissions && user.type === "VIP";
    }
}

export class SettingsManager {
      updateSettings(settings: any) {
        if (
          settings &&
          settings.notificationsEnabled !== undefined &&
          settings.language !== undefined &&
          settings.theme !== undefined &&
          settings.timezone !== undefined
        ) {
          this.saveSettings(settings);
        } else {
          console.log("Invalid settings provided");
        }
      }
     saveSettings(settings: any): void {
        console.log("Settings saved:", settings);
      }
    }
    
export class Transaction {
      amount: number;
      type:string
    
      constructor(amount: number,type:string) {
        this.amount = amount;
        this.type  = type
      }
    
      isValid(): boolean {
        return this.amount > 0;
      }

      calculateDiscountedPrice(): number {
        const discounts:any = {
          "VIP": 0.2,
          "Regular": 0.1,
          "Default": 0.05,
        };
        const discount = discounts[this.type] || discounts.Default;
        return this.amount * (1 - discount);
      }
    
      process() {
        if (this.isValid()) {
          return "Transaction processed";
        }
        return "Invalid Transaction";
      }
    }

   export class EventManager {
      handleEvent(event: { type: string; action: () => void }): void {
        const actions: { [key: string]: () => void } = {
          click: event.action,
          hover: event.action,
          scroll: event.action,
        };
    
        if (actions[event.type]) {
          actions[event.type]();
        } else {
          console.log("Unknown event");
        }
      }
    }