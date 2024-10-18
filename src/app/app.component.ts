import { Component } from '@angular/core';
import { ConstantsInit } from 'src/utils/constants';
import { convertWrittenCode } from 'src/utils/riscv-utils';
import { RiscV } from 'src/utils/riscv/riscv';
import { Memories } from 'src/utils/types';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rv-core';
  convertedCode: any;
  utilsService: any;
  constructor(){
    this.test();
  }

  test(){
 
    const convertedWrittenCode = convertWrittenCode(`     
   .text   # segmento de código (programa)

   main:   
       addi s1, zero, 4 
       addi s2, zero, 3 
       addi s3, zero, 2 
       addi s4, zero, 1 

       add t0, s1, s2     # t0 = s1 + s2
       add t1, s3, s4     # t1 = s3 + s4
       sub s0, t0, t1     # s0 = t0 - t1`);
  
       const convertedCode  = {
        code: convertedWrittenCode,
        memories: this.initMemories()
       };
  
       const riscv = new RiscV(convertedCode);
       console.log(riscv);
       console.log(this.generateResult(riscv));
       riscv.runOneStep();
       console.log(this.generateResult(riscv));
       
  }

  private generateResult(riscv: RiscV) {
    return {
      code: riscv.code,
      memories: {
        regFile: riscv.regFile.registers,
        memory: riscv.memory.memory,
        pc: riscv.pc.getPc()
      },
      control: riscv.rvControl
    };
  }


  initMemories(): Memories {
    return {
      regFile: {
        x0: 0,
        x1: 0,
        x2: 2147479548,
        x3: 268468224,
        x4: 0,
        x5: 0,
        x6: 0,
        x7: 0,
        x8: 0,
        x9: 0,
        x10: 0,
        x11: 0,
        x12: 0,
        x13: 0,
        x14: 0,
        x15: 0,
        x16: 0,
        x17: 0,
        x18: 0,
        x19: 0,
        x20: 0,
        x21: 0,
        x22: 0,
        x23: 0,
        x24: 0,
        x25: 0,
        x26: 0,
        x27: 0,
        x28: 0,
        x29: 0,
        x30: 0,
        x31: 0
      },
      memory: new Map<any, number>(),
      pc: ConstantsInit.PC
    }
  }

}




 

