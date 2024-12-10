import { User } from "./assignment-4";
import { Transaction } from "./assignment-4";
import { SettingsManager } from "./assignment-4";
import { EventManager } from "./assignment-4";

describe('should test the user',()=>{
    let  userWithInvalidEmail = {
        username :"a",
        password:"password",
        email:"email.com",
        age:20,
        metadata:null,
        type:"VIP",
        isActive:true,
        isAdmin:true,
        hasPermissions:true
    
      };
      let  userWithInvalidUsername = {
        username :"Vinaysai1234",
        password:"passwor",
        email:"email.com@",
        age:20,
        metadata:null,
        type:"VIP",
        isActive:true,
        isAdmin:true,
        hasPermissions:true
    
      };
      let  userWithInvalidAge = {
        username :"a",
        password:"pass",
        email:"email.com@",
        age:11,
        metadata:null,
        type:"VIP",
        isActive:true,
        isAdmin:true,
        hasPermissions:true
    
      };
      let  userWithInvalidPassword = {
        username :"a",
        password:"password1234",
        email:"email.com@",
        age:20,
        metadata:null,
        type:"VIP",
        isActive:true,
        isAdmin:true,
        hasPermissions:true
    
      };
      let  userDetailsForAuthentication = {
        username :"Vinaysai",
        password:"1234",
        email:"email.com@",
        age:20,
        metadata:null,
        type:"VIP",
        isActive:true,
        isAdmin:true,
        hasPermissions:true
    
      };
    test('should test the email',()=>{
        const userDetails = new User(userWithInvalidEmail)
        const results = userDetails.ValidationOfUser(userWithInvalidEmail)
        expect(results).toBe('INVALID_EMAIL')
    })
    test('should tess the age',()=>{
        const userDetails = new User(userWithInvalidAge)
        const results = userDetails.ValidationOfUser(userWithInvalidAge)
        expect(results).toBe('AGE_NOT_ACCEPTED')
    })
    test('should tess the password',()=>{
        const userDetails = new User(userWithInvalidPassword)
        const results = userDetails.ValidationOfUser(userWithInvalidPassword)
        expect(results).toBe('INVALID_PASSWORD')
    })
    test('should tess the username',()=>{
        const userDetails = new User(userWithInvalidUsername)
        const results = userDetails.ValidationOfUser(userWithInvalidUsername)
        expect(results).toBe('INVALID_USERNAME')
    })
    test('should test the authentication',()=>{
      const userDetails = new User(userDetailsForAuthentication)
      const results = userDetails.authenticate('Vinaysai','1234')
      expect(results).toBe(true)
  })

})


describe('should test the transaction class',()=>{
  test('should test the calculate discount functionality',()=>{
    const transaction = new Transaction(100,"VIP")
    const results = transaction.calculateDiscountedPrice()
    expect(results).toBe(80)
  })
  test('should test the calculate discount functionality',()=>{
    const transaction = new Transaction(0,"VIP")
    const results = transaction.isValid()
    expect(results).toBe(false)
  })
  test('should test the calculate discount functionality',()=>{
    const transaction = new Transaction(100,"VIP")
    const results = transaction.process()
    expect(results).toBe("Transaction processed")
  })
  test('should test the calculate discount functionality',()=>{
    const transaction = new Transaction(0,"VIP")
    const results = transaction.process()
    expect(results).toBe("Invalid Transaction")
  })
})

describe('should test the login functionality',()=>{
  let  userDetailsForAuthentication = {
    username :"Vinaysai",
    password:"123456789",
    email:"email.com@",
    age:20,
    metadata:null,
    type:"VIP",
    isActive:true,
    isAdmin:true,
    hasPermissions:true

  };
  test('should test the is succesfull login returning true',()=>{
    const userDetails = new User(userDetailsForAuthentication)
    const results = userDetails.login('Vinaysai',"123456789")
    expect(results).toBe(true)
  })
  test('should test the is succesfull canUserAccess returning true',()=>{
    const userDetails = new User(userDetailsForAuthentication)
    const results = userDetails.canUserAccess(userDetailsForAuthentication)
    expect(results).toBe(true)
  })
})

describe('SettingsManager', () => {
  let settingsManager: SettingsManager;

  beforeEach(() => {
    settingsManager = new SettingsManager();
  });

  describe('updateSettings', () => {
    it('should save settings when all required properties are present', () => {
      const settings = {
        notificationsEnabled: true,
        language: 'en',
        theme: 'light',
        timezone: 'UTC',
      };

      jest.spyOn(settingsManager, 'saveSettings');

      settingsManager.updateSettings(settings);

      expect(settingsManager.saveSettings).toHaveBeenCalledTimes(1);
      expect(settingsManager.saveSettings).toHaveBeenCalledWith(settings);
    });

    it('should log an error when invalid settings are provided', () => {
      const settings = {
        notificationsEnabled: true,
      };

      jest.spyOn(console, 'log');

      settingsManager.updateSettings(settings);

      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith('Invalid settings provided');
    });

    it('should not save settings when settings object is null or undefined', () => {
      jest.spyOn(settingsManager, 'saveSettings');

      settingsManager.updateSettings(null);
      settingsManager.updateSettings(undefined);

      expect(settingsManager.saveSettings).not.toHaveBeenCalled();
    });
  });

  describe('saveSettings', () => {
    it('should log the saved settings', () => {
      const settings = {
        notificationsEnabled: true,
        language: 'en',
        theme: 'light',
        timezone: 'UTC',
      };

      jest.spyOn(console, 'log');

      settingsManager.saveSettings(settings);

      expect(console.log).toHaveBeenCalledWith('Settings saved:', settings);
    });
  });
});



describe('EventManager', () => {
  let eventManager: EventManager;

  beforeEach(() => {
    eventManager = new EventManager();
  });

  test('should handle click event', () => {
    const actionMock = jest.fn();
    const event = { type: 'click', action: actionMock };

    eventManager.handleEvent(event);

    expect(actionMock).toHaveBeenCalled();
  });

  test('should handle hover event', () => {
    const actionMock = jest.fn();
    const event = { type: 'hover', action: actionMock };

    eventManager.handleEvent(event);

    expect(actionMock).toHaveBeenCalled();
  });

  test('should handle scroll event', () => {
    const actionMock = jest.fn();
    const event = { type: 'scroll', action: actionMock };

    eventManager.handleEvent(event);

    expect(actionMock).toHaveBeenCalled();
  });

  test('should log "Unknown event" for an unsupported event type', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const event = { type: 'unknown', action: jest.fn() };

    eventManager.handleEvent(event);

    expect(consoleSpy).toHaveBeenCalledWith('Unknown event');
    consoleSpy.mockRestore();
  });
});