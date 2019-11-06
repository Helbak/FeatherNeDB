module.exports = async (context) => {
    const permissions = context.params.user.permissions.slice();
    const service = context.path;
    const action = context.method;
    console.log('**************************************ALL Permissions**********************************************')
    console.log(permissions)
    console.log('**************************************SERVICE*******************************************')
    console.log(service)
    console.log('**************************************method*******************************************')
    console.log(context.method);
    context.allow = false;
  if (checkService(permissions, service, action)===true){
    context.allow = true;
  }
    return context;
  };
  
  const checkService = function(permission, service, action){
    for(let i = 0; i<permission.length; i++){
      if(permission[i].service===service && checkAction(permission[i].actions, action)===true){
        console.log( '- - - - - -  checkService return true - - - - - - -')
      return true;
      }
    }
    console.log( `- - - - - -  checkService <${service}> return false - - - - - - -`)
    return false;
  };
  
  const checkAction = function(actionsArray, action){
    for(let i = 0; i<actionsArray.length; i++){
  if(actionsArray[i]===action){
  console.log( `- - - - - -  checkAction <${action}> return true - - - - - - -`)
  return true
  }
    }
    console.log( '- - - - - -  checkAction return false - - - - - - -')
    return false;
  };