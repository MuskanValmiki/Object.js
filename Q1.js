const result = {
    success: ["max-length", "no-amd","prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
const success=result.success
const store=success.length//here i debug , to .
for(const value in success){
    console.log(store[value]);//here i debug . to ;
}